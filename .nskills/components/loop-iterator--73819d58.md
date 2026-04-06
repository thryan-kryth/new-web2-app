# Loop

| Field | Value |
|-------|-------|
| Type | `loop-iterator` |
| ID | `73819d58` |
| Category | logic |
| Tags | loop, iterate, repeat, for-each, batch, web2 |
| Description | Iterate over arrays or repeat actions N times |

## Configuration

| Setting | Value |
|---------|-------|
| Loop Type | for-each |
| Iterable Expression |  |
| Count | 10 |
| Max Iterations | 1000 |

## Documentation

### Loop Block

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


## File Structure

This component would generate the following files:

- `iterator.ts` (frontend-lib)
- `useLoop.ts` (frontend-hooks)

## Integration Points

**Depends on:**
- Delay-timer (`1ea713b4`)

