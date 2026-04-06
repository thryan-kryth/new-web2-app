export type LoopType = 'for-each' | 'count' | 'while';

export interface LoopResult<T> {
  results: T[];
  iterations: number;
  completed: boolean;
}

export async function forEachAsync<T, R>(
  items: T[],
  fn: (item: T, index: number) => R | Promise<R>,
  maxIterations = 1000,
): Promise<LoopResult<R>> {
  const results: R[] = [];
  const limit = Math.min(items.length, maxIterations);

  for (let i = 0; i < limit; i++) {
    results.push(await fn(items[i], i));
  }

  return { results, iterations: limit, completed: limit >= items.length };
}

export async function countLoop<R>(
  count: number,
  fn: (index: number) => R | Promise<R>,
  maxIterations = 1000,
): Promise<LoopResult<R>> {
  const results: R[] = [];
  const limit = Math.min(count, maxIterations);

  for (let i = 0; i < limit; i++) {
    results.push(await fn(i));
  }

  return { results, iterations: limit, completed: limit >= count };
}

export async function whileLoop<R>(
  condition: () => boolean | Promise<boolean>,
  fn: (index: number) => R | Promise<R>,
  maxIterations = 1000,
): Promise<LoopResult<R>> {
  const results: R[] = [];
  let i = 0;

  while (i < maxIterations && (await condition())) {
    results.push(await fn(i));
    i++;
  }

  return { results, iterations: i, completed: !(await condition()) };
}

export async function batchProcess<T, R>(
  items: T[],
  fn: (batch: T[]) => R | Promise<R>,
  batchSize = 10,
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    results.push(await fn(items.slice(i, i + batchSize)));
  }
  return results;
}
