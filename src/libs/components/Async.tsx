import { type Attributes, type ReactNode, useCallback } from 'react';
import {
  type UseAsyncFn,
  type UseAsyncOptions,
  useAsync,
} from 'react-client-async';
import type { InnerFC, propsAreEqual } from '#types/react';
import isAsyncFunction from '#utils/isAsyncFunction';
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

  let asyncFc: AsyncFC<P> | undefined;
  let sampeArgs: propsAreEqual<P> | undefined;

  // Check if the async function component is an async function.
  const isAsync = isAsyncFunction($fc);
  if (isAsync) {
    asyncFc = $fc;
  }

  // Check if the async function component is a memo component.
  const isMemo = isReactMemo<P>($fc);
  if (isMemo) {
    asyncFc = $fc.type;
    sampeArgs = $fc.compare;
  }

  // If regular function component, directly render it.
  if (!asyncFc) {
    const F = $fc as InnerFC<P>;
    const x = props as P & Attributes;
    return <F {...x} />;
  }

  // Create the async function.
  const args = props as P;
  const fn = useCallback<Fn>(
    (props, { signal }) => asyncFc({ ...props, [$signal]: signal }),
    [asyncFc],
  );

  // Create the options for the async function.
  const options: UseAsyncOptions<P> = { autoLoad: true, sampeArgs };

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
  if (error) throw error;

  // Renturn the rendered result.
  return result;
}

export {
  Async as default,
  $signal,
  type AsyncFC,
  type State,
  type WaitingFC,
  type FallbackFC,
  type AsyncProps,
};
