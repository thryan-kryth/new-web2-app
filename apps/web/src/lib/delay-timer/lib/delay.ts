export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function toMs(value: number, unit: 'ms' | 'seconds' | 'minutes' | 'hours'): number {
  switch (unit) {
    case 'seconds': return value * 1000;
    case 'minutes': return value * 60000;
    case 'hours': return value * 3600000;
    default: return value;
  }
}

export const DEFAULT_DELAY_MS = 1000000;
