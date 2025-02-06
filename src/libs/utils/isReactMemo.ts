import type { MemoComponent } from '#types/react';

/**
 * Check if the value is a React memo component.
 * @param e The value to check
 * @returns The boolean result
 */
export default function isReactMemo<P>(e: unknown): e is MemoComponent<P> {
  // @ts-expect-error
  const type = e?.$$typeof as symbol;
  return type === Symbol.for('react.memo');
}
