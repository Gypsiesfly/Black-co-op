'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AIVoice, availableVoices } from '@/lib/api';

interface VoiceSelectorProps {
  currentVoice: AIVoice;
  onVoiceSelect: (voice: AIVoice) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceSelector({ currentVoice, onVoiceSelect, isOpen, onClose }: VoiceSelectorProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/20"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg bg-white rounded-t-xl sm:rounded-xl p-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Select Voice</h2>
              <button 
                onClick={onClose} 
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {availableVoices.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => {
                    onVoiceSelect(voice);
                    onClose();
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                    currentVoice.id === voice.id
                      ? 'border-amber-400 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-200 hover:bg-amber-50/50'
                  }`}
                >
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src={voice.avatar}
                        alt={voice.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    {currentVoice.id === voice.id && (
                      <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{voice.name}</div>
                    <div className="text-sm text-gray-500">
                      {voice.model === 'tts-1-hd' ? 'HD Voice' : 'Standard'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
