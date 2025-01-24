import type { ReactElement } from 'react';

export default function isReactElement<P>(e: unknown): e is ReactElement<P> {
  if (typeof e !== 'object' || e === null) return false;
  // @ts-expect-error
  const type = e?.$$typeof as symbol;
  return (
    type === Symbol.for('react.element') ||
    type === Symbol.for('react.transitional.element')
  );
}
