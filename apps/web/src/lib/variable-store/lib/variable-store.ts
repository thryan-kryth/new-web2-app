export type VariableType = 'string' | 'number' | 'boolean' | 'object' | 'array';

export interface Variable<T = unknown> {
  name: string;
  type: VariableType;
  value: T;
}

const store = new Map<string, Variable>();

export function setVariable<T>(name: string, value: T, type: VariableType = 'string'): void {
  store.set(name, { name, type, value });
}

export function getVariable<T = unknown>(name: string): T | undefined {
  return store.get(name)?.value as T | undefined;
}

export function hasVariable(name: string): boolean {
  return store.has(name);
}

export function deleteVariable(name: string): boolean {
  return store.delete(name);
}

export function getAllVariables(): Variable[] {
  return Array.from(store.values());
}

export function clearVariables(): void {
  store.clear();
}

export function parseDefault(value: string, type: VariableType): unknown {
  if (!value) return type === 'number' ? 0 : type === 'boolean' ? false : type === 'array' ? [] : type === 'object' ? {} : '';
  switch (type) {
    case 'number': return Number(value);
    case 'boolean': return value === 'true';
    case 'object':
    case 'array':
      try { return JSON.parse(value); } catch { return type === 'array' ? [] : {}; }
    default: return value;
  }
}
