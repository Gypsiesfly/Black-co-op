'use client';

import React, { useState, useEffect, useRef } from 'react';
import { openai } from '@/lib/api';
import { motion, AnimatePresence } from 'framer-motion';

interface WordPopupProps {
  word: string;
  onClose: () => void;
  position?: { x: number; y: number };
  onExplainRequest?: () => Promise<void>;
}

interface Definition {
  meaning: string;
  examples: string[];
}

export default function WordPopup({ word, onClose, position, onExplainRequest }: WordPopupProps) {
  const [definition, setDefinition] = useState<Definition | null>(null);
  const [animatedExample, setAnimatedExample] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const popupRef = useRef<HTMLDivElement>(null);

  // Reset state when word changes
  useEffect(() => {
    setDefinition(null);
    setAnimatedExample('');
    setCurrentCharIndex(0);
  }, [word]);

  useEffect(() => {
    const getDefinition = async () => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are a dictionary assistant. Return ONLY a JSON object with this exact format, no additional text or formatting: {\"meaning\":\"definition here\",\"examples\":[\"example1 here\",\"example2 here\"]}"
            },
            {
              role: "user",
              content: `Define: "${word}"`
            }
          ],
          temperature: 0.3,
          max_tokens: 150
        });

        const content = response.choices[0]?.message?.content;
        if (!content) {
          throw new Error('No content in response');
        }

        try {
          // Clean the content by removing any non-JSON text
          const jsonMatch = content.match(/(\{[\s\S]*\})/);
          if (!jsonMatch) {
            throw new Error('No JSON object found in response');
          }

          const data = JSON.parse(jsonMatch[0]);
          
          // Validate the structure
          if (typeof data.meaning !== 'string' || !Array.isArray(data.examples)) {
            throw new Error('Invalid response structure');
          }

          setDefinition({
            meaning: data.meaning,
            examples: data.examples.filter((ex: unknown): ex is string => typeof ex === 'string')
          });
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          // Fallback to treating the entire content as the meaning
          setDefinition({
            meaning: content.replace(/[{}"\\]/g, '').trim(),
            examples: ['']
          });
        }
      } catch (error) {
        console.error('Error fetching definition:', error);
        setDefinition({
          meaning: 'Sorry, unable to fetch definition at this time.',
          examples: ['Please try again later.']
        });
      }
    };

    if (word) {
      getDefinition();
    }
  }, [word]);

  useEffect(() => {
    if (definition?.examples[0] && currentCharIndex < definition.examples[0].length) {
      const timer = setTimeout(() => {
        setAnimatedExample(prev => prev + definition.examples[0][currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, 25);

      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, definition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const defaultPosition = {
    x: window.innerWidth / 2 - 150,
    y: window.innerHeight / 2 - 100,
  };

  const popupPosition = position || defaultPosition;

  return (
    <AnimatePresence>
      <motion.div
        ref={popupRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          left: `${Math.max(10, Math.min(popupPosition.x, window.innerWidth - 400))}px`,
          top: `${Math.max(10, Math.min(popupPosition.y, window.innerHeight - 200))}px`,
        }}
        className="bg-white rounded-lg shadow-lg p-4 min-w-[200px] max-w-[500px] z-50"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">{word}</span>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          {definition ? (
            <>
              <p className="text-gray-700 text-base whitespace-pre-wrap break-words">
                {definition.meaning}
              </p>
              <div className="mt-4 pt-4 border-t">
                <div className="font-medium text-sm text-gray-500 mb-2">Example:</div>
                <div className="text-gray-700 italic whitespace-pre-wrap break-words">
                  {animatedExample}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center py-4">
              <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <div className="flex gap-2">
            {onExplainRequest && (
              <button
                onClick={onExplainRequest}
                className="flex-1 bg-amber-100 hover:bg-amber-200 text-gray-900 px-3 py-1.5 rounded-lg text-sm transition-colors"
              >
                Explain this word
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
