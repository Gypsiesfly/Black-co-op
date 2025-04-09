import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface Message {
  id: string;
  text: string;
  type: 'ai' | 'user';
  timestamp: number;
  expiresAt?: number;
}

interface ChatMessagesProps {
  messages: Message[];
  onMessageExpire?: (messageId: string) => void;
  selectedVoice: {
    name: string;
    avatar: string;
  };
  isAISpeaking?: boolean;
}

export function ChatMessages({ messages, onMessageExpire, selectedVoice, isAISpeaking }: ChatMessagesProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [animatingMessages, setAnimatingMessages] = useState<string[]>([]);

  // Update visible messages when messages prop changes
  useEffect(() => {
    setVisibleMessages(messages);
  }, [messages]);

  // Handle message expiration
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    messages.forEach(message => {
      if (message.expiresAt && !animatingMessages.includes(message.id)) {
        const timeoutId = setTimeout(() => {
          setAnimatingMessages(prev => [...prev, message.id]);
          setTimeout(() => {
            if (onMessageExpire) {
              onMessageExpire(message.id);
            }
            setAnimatingMessages(prev => prev.filter(id => id !== message.id));
          }, 200); // Match animation duration
        }, message.expiresAt - Date.now());
        timeouts.push(timeoutId);
      }
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [messages, onMessageExpire, animatingMessages]);

  return (
    <div className="fixed top-20 right-4 flex flex-col gap-2 max-w-sm z-50">
      <AnimatePresence mode="popLayout">
        {visibleMessages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            layout
            className={`flex w-full ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`flex flex-col rounded-lg p-4 shadow-lg max-w-[85%] ${
                message.type === 'user' 
                  ? 'bg-amber-100 text-gray-900' 
                  : 'bg-white text-gray-900 border border-gray-100'
              }`}
              style={{ alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start' }}
            >
              {message.type === 'ai' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src={selectedVoice.avatar}
                        alt={selectedVoice.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <span className="font-medium text-sm text-gray-900">{selectedVoice.name}</span>
                  {isAISpeaking && <span className="animate-pulse text-amber-500">●</span>}
                </div>
              )}
              <div className={`${message.type === 'user' ? 'text-right' : 'text-left'} text-sm`}>
                {message.text}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
