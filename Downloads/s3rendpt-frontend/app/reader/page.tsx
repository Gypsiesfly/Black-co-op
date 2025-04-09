'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Menu, Search, Edit, X } from 'lucide-react';
import { ebGaramond } from '../fonts';
import { AIVoice, availableVoices } from '@/lib/voices';
import { textToSpeech } from '@/lib/api';
import { ChatMessages } from '@/components/ChatMessages';
import { HistoryModal } from '@/components/HistoryModal';
import type { Message } from '@/components/ChatMessages';
import ChapterList from '@/components/ChapterList';

const DynamicWordPopup = dynamic(() => import('@/components/WordPopup'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const DynamicVoiceSelector = dynamic(() => import("@/components/VoiceSelector").then(mod => ({ default: mod.VoiceSelector })), { ssr: false });

// Types for Speech Recognition
interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  resultIndex: number;
  type: string;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
  length: number;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message: string;
}

declare global {
  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognition;
    SpeechRecognition: new () => SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  start: () => void;
  stop: () => void;
}

const sampleText = `There's a kind of quiet that settles into a place like Shawshank. Not the peaceful kind, but the kind that creeps into your bones and makes a man forget what the world outside ever felt like. I came to Shawshank in 1938, and by the time Andy Dufresne walked through those gates, I had already accepted that I would die behind these walls.

He wasn't like the others. Most new fish come in wide-eyed, looking over their shoulders, trying to find a corner to crawl into before the wolves close in. But Andy? He had that look, like a man walking through the park on a Sunday morning. No panic, no desperation. Just quiet.

He was a small man, slight in build, but something about him seemed untouchable. The guards pushed him along with the others, barking orders, making sure they knew that whatever they were before, it didn't matter in here. But Andy just walked forward, not in defiance, not in surrender—just steady, like a man with time on his hands.

That's the thing about prison. It takes everything from you—your family, your freedom, your sense of self. But it gives you time. Too much of it.

The first time I spoke to Andy was six months after he arrived. By then, he had earned himself a reputation. Not for fighting, not for troublemaking, but for being a man who didn't break. Shawshank breaks most men. It grinds them down until they're just another name on a roll call, another set of hands moving through the motions. But not Andy.

He came to me with a request.

"You're Red, aren't you?"

I nodded. "That's what they call me."

He held out a cigarette, unlit. I took it. Not because I smoked, but because you don't turn down a gesture like that.

"I hear you're the man who can get things."`;

export default function ReaderPage() {
  // State declarations
  const [selectedText, setSelectedText] = useState<string>(sampleText);
  const [error, setError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [recognitionInstance, setRecognitionInstance] = useState<SpeechRecognition | null>(null);
  const [isRecognitionActive, setIsRecognitionActive] = useState(false);
  const [currentWord, setCurrentWord] = useState<{ text: string; position: { x: number; y: number } } | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  const [showVoiceSelector, setShowVoiceSelector] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<AIVoice>(availableVoices[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [words, setWords] = useState<string[]>([]);
  const [isReading, setIsReading] = useState(false);
  const [isReadingPaused, setIsReadingPaused] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [wordPopupPosition, setWordPopupPosition] = useState<{ x: number; y: number } | null>(null);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);

  // Refs
  const audioRef = useRef<HTMLAudioElement>(null);
  const readerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chapterButtonRef = useRef<HTMLButtonElement>(null);

  // Function declarations
  const generateUniqueId = (prefix: string) => {
    return `${prefix}-${Math.random().toString(36).substring(2, 15)}-${Date.now()}`;
  };

  const handleChat = useCallback(async (message: string) => {
    try {
      // Add user message with expiration
      const userMessageId = generateUniqueId('user');
      const newUserMessage: Message = {
        id: userMessageId,
        text: message,
        type: 'user',
        timestamp: Date.now(),
        expiresAt: Date.now() + 10000 // Expires after 10 seconds
      };
      setMessages(prev => [...prev, newUserMessage]);

      // Show loading state
      setIsAISpeaking(true);

      // Get AI response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.response;

      // Add AI message with expiration
      const aiMessageId = generateUniqueId('ai');
      const newAIMessage: Message = {
        id: aiMessageId,
        text: aiResponse,
        type: 'ai',
        timestamp: Date.now(),
        expiresAt: Date.now() + 10000 // Expires after 10 seconds
      };
      setMessages(prev => [...prev, newAIMessage]);

      // Convert AI response to speech
      const audioData = await textToSpeech(aiResponse, selectedVoice);
      if (audioRef.current) {
        const blob = new Blob([audioData], { type: 'audio/mp3' });
        const url = URL.createObjectURL(blob);
        
        try {
          await audioRef.current.play();
          await new Promise(resolve => {
            if (audioRef.current) {
              audioRef.current.onended = resolve;
            }
          });
          URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error playing audio:', error);
          throw error;
        }
      }

    } catch (error) {
      console.error('Error handling chat:', error);
      if (error instanceof Error) {
        setError(`Chat error: ${error.message}`);
      }
    } finally {
      setIsAISpeaking(false);
    }
  }, [selectedVoice]);

  const addAIMessage = (text: string) => {
    const newMessage: Message = {
      id: generateUniqueId('ai'),
      text,
      type: 'ai',
      timestamp: Date.now(),
      expiresAt: Date.now() + 10000 // Expires after 10 seconds
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: generateUniqueId('user'),
      text,
      type: 'user',
      timestamp: Date.now(),
      expiresAt: Date.now() + 10000 // Expires after 10 seconds
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const readText = useCallback(async () => {
    if (!selectedText || isAISpeaking) return;

    try {
      setIsReading(true);
      setIsReadingPaused(false);
      const words = selectedText.split(/\s+/);
      setWords(words);
      
      for (let i = 0; i < words.length; i++) {
        if (!isReading || isReadingPaused) break;
        
        setCurrentWordIndex(i);
        setCurrentWord({
          text: words[i],
          position: { x: 0, y: 0 }
        });

        const audioData = await textToSpeech(words[i], selectedVoice);
        if (audioRef.current) {
          const blob = new Blob([audioData], { type: 'audio/mp3' });
          const url = URL.createObjectURL(blob);
          
          try {
            await audioRef.current.play();
            await new Promise(resolve => {
              if (audioRef.current) {
                audioRef.current.onended = resolve;
              }
            });
            URL.revokeObjectURL(url);
          } catch (error) {
            console.error('Error playing audio:', error);
            throw error;
          }
        }
      }
    } catch (error) {
      console.error('Error reading text:', error);
      setError('Error reading text. Please try again.');
    } finally {
      setIsReading(false);
      setIsReadingPaused(false);
      setCurrentWord(null);
      setCurrentWordIndex(0);
    }
  }, [selectedText, isAISpeaking, selectedVoice, isReading, isReadingPaused]);

  const startRecognition = useCallback(async () => {
    if (!recognitionInstance || isAISpeaking) {
      return;
    }
    
    try {
      if (!isRecognitionActive) {
        console.log('Starting speech recognition...');
        await recognitionInstance.start();
        setIsRecognitionActive(true);
      }
    } catch (error) {
      console.error('Error starting recognition:', error);
      setIsRecognitionActive(false);
      if (error instanceof Error) {
        setError(`Failed to start speech recognition: ${error.message}`);
      }
    }
  }, [recognitionInstance, isAISpeaking, isRecognitionActive]);

  const stopRecognition = useCallback(() => {
    if (recognitionInstance && isRecognitionActive) {
      try {
        recognitionInstance.stop();
        setIsRecognitionActive(false);
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
    }
  }, [recognitionInstance, isRecognitionActive]);

  const handleVoiceCommand = useCallback(async (command: string) => {
    console.log('Handling voice command:', command);
    
    await stopRecognition();

    try {
      if (command.includes('read') || command.includes('start')) {
        await readText();
      } else if (command.includes('stop') || command.includes('pause')) {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsReading(false);
          setIsReadingPaused(true);
        }
      } else if (command.includes('continue') || command.includes('resume')) {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsReading(true);
          setIsReadingPaused(false);
        }
      } else {
        const messageId = generateUniqueId('user');
        const newMessage: Message = {
          id: messageId,
          text: command,
          type: 'user',
          timestamp: Date.now(),
          expiresAt: Date.now() + 10000 // Expires after 10 seconds
        };
        setMessages(prev => [...prev, newMessage]);
        await handleChat(command);
      }
    } catch (error) {
      console.error('Error handling voice command:', error);
      if (error instanceof Error) {
        setError(`Error executing command: ${error.message}`);
      }
    } finally {
      if (isListening && !isAISpeaking) {
        console.log('Restarting recognition after command');
        await new Promise(resolve => setTimeout(resolve, 300));
        await startRecognition();
      }
    }
  }, [isListening, isAISpeaking, startRecognition, stopRecognition, readText, handleChat]);

  const removeMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  };

  const speakResponse = async (text: string) => {
    try {
      console.log('Speaking response:', text);
      const audioData = await textToSpeech(text, selectedVoice);
      const blob = new Blob([audioData], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);

      if (audioRef.current) {
        audioRef.current.src = url;
        setIsAISpeaking(true);
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise.catch(error => {
            console.error('Error playing audio:', error);
            setIsAISpeaking(false);
            setError('Failed to play audio. Please check your audio settings.');
          });
        }
        // Clean up URL after playback
        audioRef.current.onended = () => {
          URL.revokeObjectURL(url);
          setIsAISpeaking(false);
        };
      }
    } catch (error) {
      console.error('Error speaking response:', error);
      setIsAISpeaking(false);
      setError(error instanceof Error ? error.message : 'Failed to speak response');
      console.log('Detailed error logging: Error speaking response');
      // Fallback to browser's speech synthesis
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const selectedText = selection.toString().trim();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setSelectedWord(selectedText);
      setWordPopupPosition({
        x: rect.left + (rect.width / 2),
        y: rect.top - 10
      });
    } else {
      setSelectedWord(null);
      setWordPopupPosition(null);
    }
  };

  const handleWordExplanationRequest = async () => {
    if (!selectedWord) return;
    
    setWordPopupPosition(null);
    setSelectedWord(null);
    setIsReadingPaused(true);
    
    const message = `Let me explain what "${selectedWord}" means in this context.`;
    addAIMessage(message);
    await speakResponse(message);
  };

  const stopReading = () => {
    setIsReadingPaused(true);
    setIsReading(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsAISpeaking(false);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleWordPopupClose = () => {
    setSelectedWord(null);
    setWordPopupPosition(null);
    if (isReadingPaused) {
      const message = "I'll continue reading from where we left off.";
      addAIMessage(message);
      speakResponse(message).then(() => {
        setIsReadingPaused(false);
        readText();
      });
    }
  };

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition && !recognitionInstance) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          console.log('Speech recognition started');
          setIsRecognitionActive(true);
        };

        recognition.onend = () => {
          console.log('Speech recognition ended');
          setIsRecognitionActive(false);
        };

        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setError(`Speech recognition error: ${event.error}`);
          setIsRecognitionActive(false);
          setIsListening(false);
        };

        recognition.onresult = (event) => {
          const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
          console.log('Recognized:', transcript);
          handleVoiceCommand(transcript);
        };

        setRecognitionInstance(recognition);
      }
    }

    return () => {
      if (recognitionInstance && isRecognitionActive) {
        stopRecognition();
      }
    };
  }, []);

  // Handle listening state changes
  useEffect(() => {
    if (isListening && !isAISpeaking) {
      startRecognition();
    } else {
      stopRecognition();
    }
  }, [isListening, isAISpeaking]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionInstance) {
        stopRecognition();
      }
    };
  }, [recognitionInstance, stopRecognition]);

  useEffect(() => {
    if (selectedText) {
      setWords(selectedText.split(/\s+/));
    }
  }, [selectedText]);

  useEffect(() => {
    document.addEventListener('mouseup', handleTextSelection);
    return () => document.removeEventListener('mouseup', handleTextSelection);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const onPlay = () => {
      console.log('Audio started playing');
      setIsAISpeaking(true);
      stopRecognition();
    };

    const onPause = async () => {
      console.log('Audio paused');
      setIsAISpeaking(false);
      // Add a small delay before restarting recognition
      if (isListening) {
        console.log('Waiting before restarting recognition...');
        await new Promise(resolve => setTimeout(resolve, 300));
        startRecognition();
      }
    };

    const onEnded = async () => {
      console.log('Audio ended');
      setIsAISpeaking(false);
      // Add a small delay before restarting recognition
      if (isListening) {
        console.log('Waiting before restarting recognition...');
        await new Promise(resolve => setTimeout(resolve, 300));
        startRecognition();
      }
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [isListening, startRecognition, stopRecognition, isAISpeaking]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      setMessages(prevMessages => prevMessages.filter(message => 
        message.expiresAt ? message.expiresAt > now : true
      ));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <aside className={`${
        showMobileSidebar ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-64 p-6 flex flex-col justify-between bg-[#FCFCFC] border-r transition-all duration-300 fixed h-screen z-20 ${
        isFullscreen ? 'hidden' : ''
      }`}>
        <div className="flex flex-col w-full">
          {/* Logo and icons row */}
          <div className="flex items-center justify-between mb-12">
            <Image 
              src="/img/logo.svg" 
              alt="S3renDPT" 
              width={120} 
              height={30}
              className="h-auto"
            />
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <Edit size={20} />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 lg:hidden"
                onClick={() => setShowMobileSidebar(false)}
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <button className="w-full text-left px-4 py-3 rounded-lg bg-amber-50 text-gray-800 border border-amber-100 hover:bg-amber-100">
            <span className="text-sm">Shawshank Redemption</span>
          </button>
        </div>
        <button className="fixed bottom-6 w-[calc(16rem-3rem)] bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
          Log out
        </button>
      </aside>

      {/* Mobile overlay */}
      {showMobileSidebar && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 lg:hidden"
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      {/* Main Content */}
      <main className={`flex-1 min-w-0 relative ${isFullscreen ? '' : 'lg:ml-64'}`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 lg:px-6 py-4 border-b">
          <div className="flex items-center gap-3">
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
              onClick={() => setShowMobileSidebar(true)}
            >
              <Menu size={20} />
            </button>
            <h1 className={`${ebGaramond.className} text-2xl`}>
              Shawshank r.
            </h1>
            <button 
              ref={chapterButtonRef}
              onClick={() => setShowChapters(true)} 
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-full text-sm"
            >
              <span>Chapter {currentChapter}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowHistory(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setIsListening(prev => !prev)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                isListening 
                  ? 'bg-amber-100 text-amber-900' 
                  : 'bg-amber-50 hover:bg-amber-100'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                isListening ? 'bg-red-500 animate-pulse' : 'bg-gray-400'
              }`}></span>
              <span>{isListening ? 'Listening...' : 'Click to talk'}</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-[#383838] rounded-full"
            >
              {isFullscreen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 11H3V13M13 11H11V13M11 3H13V5M3 3H5V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V5M15 5V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H11M11 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0391 15 13.5304 15 13V11M1 11V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Content area */}
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <div className="mb-12">
            <div className="text-center mb-4">
              <span className="text-sm text-gray-500">Chapter {currentChapter}</span>
            </div>
            <h1 className={`${ebGaramond.className} text-4xl text-center font-normal`}>Andy Dufresne</h1>
          </div>

          <article className="reader-content prose prose-xl max-w-none">
            <div className="text-lg lg:text-xl leading-relaxed space-y-10" onMouseUp={handleTextSelection}>
              {selectedText && (
                <div>
                  {selectedText.split(/\s+/).map((word, index) => (
                    <span
                      key={index}
                      className={`${
                        index === currentWordIndex && isReading
                          ? 'bg-amber-200'
                          : ''
                      } transition-colors duration-200`}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {/* AI Reader */}
        <div className="fixed bottom-8 right-8">
          <div className="bg-amber-50 rounded-full py-3 px-6 flex items-center gap-4">
            <button 
              onClick={() => setShowVoiceSelector(true)}
              className="relative group"
            >
              <div className="relative w-14 h-14 flex-shrink-0">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image 
                    src={selectedVoice.avatar}
                    alt={selectedVoice.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            </button>
            <div className="hidden lg:flex items-center gap-4">
              <span className="text-base font-medium">{selectedVoice.name}</span>
              <div className="w-24 h-1.5 bg-amber-200 rounded-full"></div>
              <span className="text-sm bg-white rounded-full px-3 py-1">{currentWord?.text || ''}</span>
            </div>
          </div>
        </div>

        <audio 
          ref={audioRef}
          preload="auto"
          autoPlay={false}
          playsInline
          crossOrigin="anonymous"
          onPlay={() => {
            console.log('Audio started playing');
            setIsAISpeaking(true);
          }}
          onPause={() => {
            console.log('Audio paused');
            setIsAISpeaking(false);
          }}
          onEnded={() => {
            console.log('Audio ended');
            setIsAISpeaking(false);
            setIsListening(false);
          }}
          onError={(e) => {
            console.error('Audio error:', e);
            setIsAISpeaking(false);
            setError('Error playing audio');
          }}
          onLoadedData={() => {
            console.log('Audio data loaded');
          }}
          className="hidden" 
        />
      </main>

      {/* Popups */}
      {showChapters && (
        <ChapterList
          onClose={() => setShowChapters(false)}
          onSelectChapter={setCurrentChapter}
          currentChapter={currentChapter}
          buttonRef={chapterButtonRef}
        />
      )}

      {showVoiceSelector && (
        <DynamicVoiceSelector 
          currentVoice={selectedVoice}
          onVoiceSelect={setSelectedVoice}
          isOpen={showVoiceSelector}
          onClose={() => setShowVoiceSelector(false)}
        />
      )}

      {selectedWord && wordPopupPosition && (
        <DynamicWordPopup 
          word={selectedWord}
          position={wordPopupPosition}
          onClose={handleWordPopupClose}
          onExplainRequest={handleWordExplanationRequest}
        />
      )}

      <HistoryModal
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        messages={messages}
      />

      <ChatMessages
        messages={messages}
        onMessageExpire={removeMessage}
        selectedVoice={selectedVoice}
        isAISpeaking={isAISpeaking}
      />
    </div>
  );
}
