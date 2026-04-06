# Variable Block

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
