export type OpenAIVoice = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";

export interface AIVoice {
  id: OpenAIVoice;
  name: string;
  avatar: string;
  model: 'tts-1' | 'tts-1-hd';
}

export const availableVoices: AIVoice[] = [
  {
    id: 'alloy',
    name: 'Alex',
    avatar: '/img/avatars/alex.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'nova',
    name: 'Nova',
    avatar: '/img/avatars/nova.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'shimmer',
    name: 'Emma',
    avatar: '/img/avatars/emma.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'echo',
    name: 'James',
    avatar: '/img/avatars/james.jpg',
    model: 'tts-1-hd'
  }
];
