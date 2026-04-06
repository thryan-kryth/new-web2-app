# Delay / Timer

| Field | Value |
|-------|-------|
| Type | `delay-timer` |
| ID | `1ea713b4` |
| Category | logic |
| Tags | delay, timer, wait, schedule, pause, web2 |
| Description | Pause execution or schedule delayed actions |

## Configuration

| Setting | Value |
|---------|-------|
| Delay Type | fixed |
| Delay Ms | 1000 |
| Unit | seconds |

## Documentation

### Delay/Timer Block

# Delay / Timer Block

Pauses execution for a configurable duration.

## Configuration
- **Type**: fixed
- **Delay**: 1000 seconds

## Usage

```typescript
import { delay } from '@/lib/delay-timer/lib/delay';

await delay(2000); // wait 2 seconds
```


## File Structure

This component would generate the following files:

- `delay.ts` (frontend-lib)
- `useDelay.ts` (frontend-hooks)

## Integration Points

**Depends on:**
- Variable-store (`827124c2`)

**Provides to:**
- Loop-iterator (`73819d58`)

