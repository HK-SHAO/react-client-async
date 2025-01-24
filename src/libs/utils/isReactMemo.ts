import type { MemoComponent } from '../types/react';

export default function isReactMemo<P>(e: unknown): e is MemoComponent<P> {
  // @ts-expect-error
  const type = e?.$$typeof as symbol;
  return type === Symbol.for('react.memo');
}
