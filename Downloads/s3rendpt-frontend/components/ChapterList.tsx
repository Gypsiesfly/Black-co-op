'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ChapterListProps {
  onClose: () => void;
  onSelectChapter: (chapter: number) => void;
  currentChapter: number;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
}

const chapters = [
  { number: 1, title: 'Andy Dufresne' },
  { number: 2, title: 'The First Night' },
  { number: 3, title: 'The Sisters' },
  { number: 4, title: 'The Library' },
  { number: 5, title: 'Brooks Was Here' },
  { number: 6, title: 'The Rooftop' },
  { number: 7, title: 'The Plan' },
  { number: 8, title: 'Redemption' },
];

export default function ChapterList({ onClose, onSelectChapter, currentChapter, buttonRef }: ChapterListProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const buttonRect = buttonRef?.current?.getBoundingClientRect();
  const top = buttonRect ? buttonRect.bottom + 8 : '50%';
  const left = buttonRect ? buttonRect.left : '50%';
  const transform = buttonRect ? 'none' : 'translate(-50%, -50%)';

  return (
    <div className="fixed inset-0 z-50">
      <div 
        ref={popupRef}
        className="absolute"
        style={{ top, left, transform }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white rounded-lg shadow-lg w-72 overflow-hidden border border-gray-200"
        >
          <div className="flex justify-between items-center p-4 border-b bg-gray-50">
            <h2 className="text-base font-medium">Chapters</h2>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-2 max-h-[400px] overflow-y-auto">
            {chapters.map((chapter) => (
              <button
                key={chapter.number}
                onClick={() => {
                  onSelectChapter(chapter.number);
                  onClose();
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  currentChapter === chapter.number
                    ? 'bg-amber-50 text-amber-900'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Chapter {chapter.number}</span>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">{chapter.title}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
