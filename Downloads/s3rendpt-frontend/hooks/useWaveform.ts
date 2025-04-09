import { useEffect, useRef } from 'react';

interface WaveformOptions {
  color: string;
  height: number;
  width: number;
  barWidth: number;
  barGap: number;
  smoothing: number;
}

export function useWaveform(audioElement: HTMLAudioElement | null, options: WaveformOptions) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>();
  const analyserRef = useRef<AnalyserNode>();
  const dataArrayRef = useRef<Uint8Array>();

  useEffect(() => {
    if (!audioElement || !canvasRef.current) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioContext.createMediaElementSource(audioElement);
    const analyser = audioContext.createAnalyser();
    
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = options.smoothing;
    
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    const draw = () => {
      if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      analyserRef.current.getByteFrequencyData(dataArrayRef.current);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = options.color;

      const barCount = Math.floor(canvas.width / (options.barWidth + options.barGap));
      const dataStep = Math.floor(dataArrayRef.current.length / barCount);

      for (let i = 0; i < barCount; i++) {
        const dataIndex = i * dataStep;
        const value = dataArrayRef.current[dataIndex] / 255.0;
        const barHeight = value * options.height;
        
        ctx.fillRect(
          i * (options.barWidth + options.barGap),
          (options.height - barHeight) / 2,
          options.barWidth,
          barHeight
        );
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      audioContext.close();
    };
  }, [audioElement, options]);

  return canvasRef;
}
