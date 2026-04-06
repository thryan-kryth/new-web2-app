# Variable

| Field | Value |
|-------|-------|
| Type | `variable-store` |
| ID | `827124c2` |
| Category | logic |
| Tags | variable, store, state, data, assign, web2 |
| Description | Declare and set variables for use across blocks |

## Configuration

| Setting | Value |
|---------|-------|
| Variable Name | myVariable |
| Variable Type | string |
| Default Value |  |
| Scope | local |

## Documentation

### Variable Block

# Variable Block

Declare, read, and update variables shared across workflow blocks.

## Configuration
- **Name**: myVariable
- **Type**: string
- **Scope**: local
- **Default**: (empty)

## Usage

```typescript
import { setVariable, getVariable } from '@/lib/variable-store/lib/variable-store';

setVariable('count', 42, 'number');
const count = getVariable<number>('count'); // 42
```


## File Structure

This component would generate the following files:

- `variable-store.ts` (frontend-lib)
- `useVariable.ts` (frontend-hooks)

## Integration Points

**Depends on:**
- Web2-frontend-scaffold (`fe90565a`)

**Provides to:**
- Delay-timer (`1ea713b4`)

