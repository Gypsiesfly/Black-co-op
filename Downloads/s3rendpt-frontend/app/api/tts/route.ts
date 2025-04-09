import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Check for API key in both environments
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;

console.log('Server-side OpenAI API key status:', {
  keySet: !!OPENAI_API_KEY,
  keyLength: OPENAI_API_KEY?.length,
  envKeySet: !!process.env.OPENAI_API_KEY,
  publicKeySet: !!process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

if (!OPENAI_API_KEY) {
  console.error('OpenAI API key is not set in either OPENAI_API_KEY or NEXT_PUBLIC_OPENAI_API_KEY');
  throw new Error('OpenAI API key is not configured');
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, voice, model } = body;

    console.log('Received TTS request:', { 
      text: text.substring(0, 50) + '...',
      voice,
      model,
      textLength: text.length,
      apiKeySet: !!OPENAI_API_KEY,
      apiKeyLength: OPENAI_API_KEY?.length
    });

    if (!text || !voice || !model) {
      console.error('Missing parameters:', { text: !!text, voice, model });
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    if (text.length > 4096) {
      console.error('Text too long:', text.length);
      return NextResponse.json(
        { error: 'Text too long (max 4096 characters)' },
        { status: 400 }
      );
    }

    try {
      console.log('Calling OpenAI speech API with params:', {
        model,
        voice,
        textLength: text.length,
        speed: 1.0
      });

      const response = await openai.audio.speech.create({
        model: model,
        voice: voice,
        input: text,
        speed: 1.0,
        response_format: 'mp3'
      });

      if (!response) {
        console.error('Invalid response from OpenAI');
        return NextResponse.json(
          { error: 'Invalid response from OpenAI' },
          { status: 500 }
        );
      }

      console.log('Got response from OpenAI, converting to ArrayBuffer...');
      const arrayBuffer = await response.arrayBuffer();

      if (!arrayBuffer || arrayBuffer.byteLength === 0) {
        console.error('Received empty audio data from OpenAI');
        return NextResponse.json(
          { error: 'Received empty audio data from OpenAI' },
          { status: 500 }
        );
      }

      console.log('Successfully generated speech:', {
        size: arrayBuffer.byteLength,
        type: 'audio/mpeg'
      });

      // Set CORS headers
      const headers = {
        'Content-Type': 'audio/mpeg',
        'Content-Length': arrayBuffer.byteLength.toString(),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      };

      return new NextResponse(arrayBuffer, { headers });
    } catch (openaiError) {
      console.error('OpenAI API error:', openaiError);
      const errorMessage = openaiError instanceof Error ? openaiError.message : 'OpenAI API error';
      console.error('Error details:', errorMessage);
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('TTS error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate speech';
    console.error('Error details:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
