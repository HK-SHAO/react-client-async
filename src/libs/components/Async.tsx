import { type FC, type ReactNode, useCallback } from 'react';

import {
  $abortedByUnmounted,
  type UseAsyncFn,
  type UseAsyncOptions,
  useAsync,
} from 'react-client-async';
import type { InnerFC, propsAreEqual } from '#types/react';
import isReactMemo from '#utils/isReactMemo';

/**
 * Symbol for getting the signal from the props of the async function component.
 */
const $signal = Symbol('Siganl for Async Function Component');

type SignalSymbol = typeof $signal;
type SignalObject = { [$signal]: AbortSignal };

type AsyncFC<P> = InnerFC<P & SignalObject>;
type State = ReturnType<typeof useAsync<unknown, ReactNode>>['state'];
type WaitingFC = AsyncFC<{ state: State }>;
type FallbackFC = AsyncFC<{ state: State }>;
type AsyncProps<P> = Omit<P, SignalSymbol> & {
  /**
   * The async function component.
   */
  $fc: AsyncFC<P>;
  /**
   * The waiting component.
   */
  $waiting?: ReactNode | WaitingFC;
  /**
   * The fallback component.
   */
  $fallback?: ReactNode | FallbackFC;
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
  type Fn = UseAsyncFn<P, ReactNode>;

  let fc: AsyncFC<P> = $fc;
  let sampeArgs: propsAreEqual<P> | undefined;

  // Check if the async function component is a memo component.
  if (isReactMemo<P>($fc)) {
    fc = $fc.type;
    sampeArgs = $fc.compare;
  }

  // Create the async function.
  const args = props as P;
  const fn = useCallback<Fn>(
    (props, { signal }) => fc({ ...props, [$signal]: signal }),
    [fc],
  );

  // Create the options for the async function.
  const options = { autoLoad: true, sampeArgs } satisfies UseAsyncOptions<P>;

  // Execute the async function and get the state.
  const { state } = useAsync(fn, args, options);
  const { pending, result, error } = state;

  // Render pending state.
  if (pending) {
    if (typeof $waiting !== 'function') return $waiting;
    return <Async $fc={$waiting} state={state} />;
  }

  // Render error state.
  if (error && $fallback) {
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
  type FallbackFC,
  type State,
  type WaitingFC,
  wrap,
};
