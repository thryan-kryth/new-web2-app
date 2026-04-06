import { useState, useCallback } from 'react';
import { forEachAsync, countLoop, type LoopResult } from '../lib/iterator';

export function useLoop<T = unknown>() {
  const [results, setResults] = useState<T[]>([]);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const forEach = useCallback(async <I>(
    items: I[],
    fn: (item: I, index: number) => T | Promise<T>,
  ): Promise<LoopResult<T>> => {
    setRunning(true);
    setProgress({ current: 0, total: items.length });
    setResults([]);

    const result = await forEachAsync(items, async (item, idx) => {
      const r = await fn(item, idx);
      setProgress((p) => ({ ...p, current: idx + 1 }));
      setResults((prev) => [...prev, r]);
      return r;
    }, 1000);

    setRunning(false);
    return result;
  }, []);

  const repeat = useCallback(async (
    count: number,
    fn: (index: number) => T | Promise<T>,
  ): Promise<LoopResult<T>> => {
    setRunning(true);
    setProgress({ current: 0, total: count });
    setResults([]);

    const result = await countLoop(count, async (idx) => {
      const r = await fn(idx);
      setProgress((p) => ({ ...p, current: idx + 1 }));
      setResults((prev) => [...prev, r]);
      return r;
    }, 1000);

    setRunning(false);
    return result;
  }, []);

  return { results, running, progress, forEach, repeat };
}
