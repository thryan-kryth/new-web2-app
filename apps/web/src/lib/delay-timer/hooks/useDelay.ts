import { useState, useCallback, useRef, useEffect } from 'react';
import { delay as delayFn } from '../lib/delay';

export function useDelay(defaultMs = 1000000) {
  const [waiting, setWaiting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const execute = useCallback(async <T>(fn: () => T | Promise<T>, ms?: number): Promise<T> => {
    const waitMs = ms ?? defaultMs;
    setWaiting(true);
    setElapsed(0);

    timerRef.current = setInterval(() => {
      setElapsed((prev) => Math.min(prev + 100, waitMs));
    }, 100);

    await delayFn(waitMs);

    if (timerRef.current) clearInterval(timerRef.current);
    setElapsed(waitMs);
    setWaiting(false);

    return fn();
  }, [defaultMs]);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return { waiting, elapsed, execute };
}
