# Loop Block

# Loop / Iterator Block

Iterates over collections or repeats actions.

## Configuration
- **Loop Type**: for-each
- **Count**: 10
- **Max Iterations**: 1000

## Usage

```typescript
import { forEachAsync, countLoop } from '@/lib/loop-iterator/lib/iterator';

// Iterate over items
const result = await forEachAsync(items, async (item, i) => {
  return processItem(item);
});

// Repeat N times
const result = await countLoop(5, async (i) => {
  return doWork(i);
});
```
