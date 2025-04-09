import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Message } from "./ChatMessages";
import { ScrollArea } from "./ui/scroll-area";
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
}

export function HistoryModal({ isOpen, onClose, messages }: HistoryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Conversation History</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="flex flex-col gap-4">
            {messages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No messages yet</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-lg p-4 ${
                    message.type === 'ai' 
                      ? 'bg-white border border-gray-100' 
                      : 'bg-amber-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {message.type === 'ai' ? (
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-xs font-medium">AI</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-xs font-medium">You</span>
                      </div>
                    )}
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
