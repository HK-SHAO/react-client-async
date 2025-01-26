import type { ReactElement } from 'react';

/**
 * Check if the value is a React element.
 * @param e The value to check
 * @returns The boolean result
 */
export default function isReactElement<P>(e: unknown): e is ReactElement<P> {
  if (typeof e !== 'object' || e === null) return false;
  // @ts-expect-error
  const type = e?.$$typeof as symbol;
  return (
    type === Symbol.for('react.element') ||
    type === Symbol.for('react.transitional.element')
  );
}
