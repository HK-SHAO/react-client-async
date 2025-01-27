import { type FC, type ReactNode, useCallback } from 'react';

import {
  $abortedByUnmounted,
  type State,
  type UseAsyncFn,
  useAsync,
} from 'react-client-async';
import type { InnerFC, propsAreEqual } from '#types/react';
import isReactMemo from '#utils/isReactMemo';

/**
 * Symbol for getting the signal from the props of the async function component.
 */
const $signal = Symbol('Siganl for Async Function Component');

type SignalObject = { [$signal]: AbortSignal };
type AsyncFC<P> = InnerFC<P & SignalObject>;
type StateFC = AsyncFC<{ state: State<ReactNode> }>;
type AsyncProps<P> = Omit<P, symbol> & {
  /**
   * The async function component.
   */
  $fc: AsyncFC<P>;
  /**
   * The waiting component.
   */
  $waiting?: ReactNode | StateFC;
  /**
   * The fallback component.
   */
  $fallback?: ReactNode | StateFC;
};

/**
 * The `Async` component for rendering async function components.
 */
function Async<P>({
  $fc,
  $waiting,
  $fallback,
  ...props
}: AsyncProps<P>): ReactNode {
  let fc: AsyncFC<P> = $fc;
  let sameArgs: propsAreEqual<P> | undefined;

  // Check if the async function component is a memo component.
  if (isReactMemo<P>($fc)) {
    fc = $fc.type;
    sameArgs = $fc.compare;
  }

  // Create the async function.
  const args = props as P;
  const fn = useCallback<UseAsyncFn<P, ReactNode>>(
    (props, { signal }) => fc({ ...props, [$signal]: signal }),
    [fc],
  );

  // Execute the async function and get the state.
  const { state } = useAsync(fn, args, { sameArgs });
  const { pending, result, error } = state;

  // Render pending state.
  if (pending) {
    if ($waiting === undefined) return result;
    if (typeof $waiting !== 'function') return $waiting;
    return <Async $fc={$waiting} state={state} />;
  }

  // Render error state.
  if (error && $fallback !== undefined) {
    if (typeof $fallback !== 'function') return $fallback;
    return (
      <Async
        $fc={$fallback}
        $waiting={$waiting}
        $fallback={$fallback}
        state={state}
      />
    );
  }

  // No fallback, throw the error.
  if (error && error !== $abortedByUnmounted) throw error;

  // Renturn the rendered result.
  return result;
}

/**
 * Wrap an async function component to a normal function component.
 * @param fc The async function component.
 * @returns The normal function component.
 */
function wrap<P>(fc: AsyncFC<P>): FC<P> {
  return (props: P) => <Async $fc={fc} {...props} />;
}

export {
  Async as default,
  $signal,
  type AsyncFC,
  type AsyncProps,
  type StateFC,
  wrap,
};
