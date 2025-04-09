import OpenAI from 'openai';

// Initialize OpenAI client
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('OpenAI API key is not set. Please check your environment variables.');
}

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Required for client-side usage
});

// Initialize Eleven Labs API
const ELEVEN_LABS_API_URL = 'https://api.elevenlabs.io/v1';
const ELEVEN_LABS_API_KEY = process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY;

if (!ELEVEN_LABS_API_KEY) {
  console.error('Eleven Labs API key is not set. Please check your environment variables.');
}

export const elevenLabs = {
  async textToSpeech(text: string, voiceId: string) {
    const response = await fetch(`${ELEVEN_LABS_API_URL}/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': ELEVEN_LABS_API_KEY || '',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.statusText}`);
    }

    return response.arrayBuffer();
  },

  async getVoices() {
    const response = await fetch(`${ELEVEN_LABS_API_URL}/voices`, {
      headers: {
        'xi-api-key': ELEVEN_LABS_API_KEY || '',
      },
    });

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.statusText}`);
    }

    return response.json();
  }
};

// Dictionary API for word definitions
const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export interface WordDefinition {
  word: string;
  definition: string;
  examples: string[];
}

export type OpenAIVoice = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";

export type AIVoice = {
  id: OpenAIVoice;
  name: string;
  avatar: string;
  model: 'tts-1' | 'tts-1-hd';
};

export const availableVoices: AIVoice[] = [
  {
    id: 'alloy',
    name: 'Alex',
    avatar: '/img/avatars/alex.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'echo',
    name: 'Emma',
    avatar: '/img/avatars/Emma.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'fable',
    name: 'Olivia',
    avatar: '/img/avatars/Olivia.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'onyx',
    name: 'James',
    avatar: '/img/avatars/James.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'nova',
    name: 'Sophia',
    avatar: '/img/avatars/Sophia.jpg',
    model: 'tts-1-hd'
  },
  {
    id: 'shimmer',
    name: 'Isabella',
    avatar: '/img/avatars/Isabella.jpg',
    model: 'tts-1-hd'
  }
];

export async function getWordDefinition(word: string): Promise<WordDefinition> {
  const response = await fetch(`${DICTIONARY_API_URL}/${word}`);
  const data = await response.json();
  
  return {
    word,
    definition: data[0]?.meanings[0]?.definitions[0]?.definition || 'Definition not found',
    examples: data[0]?.meanings[0]?.definitions[0]?.examples || [],
  };
}

export async function getContextualMeaning(text: string): Promise<string> {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that provides clear, concise explanations of words and phrases in context."
      },
      {
        role: "user",
        content: `Explain the meaning of this text in context: "${text}"`
      }
    ],
    max_tokens: 150,
  });

  return completion.choices[0]?.message?.content || 'Unable to generate explanation';
}

export async function generateUsageExamples(text: string): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Generate 3 natural, contextually relevant example sentences using the given text."
      },
      {
        role: "user",
        content: `Generate examples using: "${text}"`
      }
    ],
    max_tokens: 200,
  });

  const examples = completion.choices[0]?.message?.content?.split('\n') || [];
  return examples.filter(example => example.trim().length > 0);
}

export async function textToSpeech(text: string, voice: AIVoice): Promise<ArrayBuffer> {
  return elevenLabs.textToSpeech(text, voice.id);
}

export async function handleUserQuestion(question: string): Promise<string> {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that answers questions about the text being read."
      },
      {
        role: "user",
        content: question
      }
    ],
    max_tokens: 200,
  });

  return completion.choices[0]?.message?.content || 'Unable to generate response';
}
