import { useState, useCallback } from 'react';
import {
  setVariable as storeSet,
  getVariable as storeGet,
  parseDefault,
  type VariableType,
} from '../lib/variable-store';

export function useVariable<T = unknown>(
  name = 'myVariable',
  type: VariableType = 'string',
  defaultValue = '',
) {
  const [value, setValue] = useState<T>(() => {
    const existing = storeGet<T>(name);
    if (existing !== undefined) return existing;
    return parseDefault(defaultValue, type) as T;
  });

  const set = useCallback((newValue: T) => {
    storeSet(name, newValue, type);
    setValue(newValue);
  }, [name, type]);

  return { value, set, name, type };
}
