import { type Attributes, type FC, type ReactNode, useCallback } from 'react';
import {
  type UseAsyncFn,
  type UseAsyncOptions,
  useAsync,
} from 'react-client-async';
import type { propsAreEqual } from '#types/react';
import isAsyncFunction from '#utils/isAsyncFunction';
import isReactMemo from '#utils/isReactMemo';

/**
 * Symbol for getting the signal from the props of the async function component.
 */
export const $signal = Symbol('Siganl for Async Function Component');

export type SignalSymbol = typeof $signal;
export type SignalObject = { [$signal]: AbortSignal };
export type AsyncFC<P> = FC<P & SignalObject>;
export type State = ReturnType<typeof useAsync<unknown, ReactNode>>['state'];
export type WaitingFC = AsyncFC<{ state: State }>;
export type FallbackFC = AsyncFC<{ state: State }>;
export type AsyncProps<P> = Omit<P, SignalSymbol> & {
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
export default function Async<P>({
  $fc,
  $waiting,
  $fallback,
  ...props
}: AsyncProps<P>): ReactNode {
  type Fn = UseAsyncFn<P, ReactNode>;

  let asyncFc: AsyncFC<P> | undefined;
  let sampeArgs: propsAreEqual<P> | undefined;

  const isAsync = isAsyncFunction($fc);
  if (isAsync) {
    asyncFc = $fc;
  }

  const isMemo = isReactMemo<P>($fc);
  if (isMemo) {
    asyncFc = $fc.type;
    sampeArgs = $fc.compare;
  }

  if (!asyncFc) {
    const F = $fc as FC<P>;
    const x = props as P & Attributes;
    return <F {...x} />;
  }

  const args = props as P;
  const fn = useCallback<Fn>(
    (props, { signal }) => asyncFc({ ...props, [$signal]: signal }),
    [asyncFc],
  );

  const options: UseAsyncOptions<P> = { autoLoad: true, sampeArgs };
  const { state } = useAsync(fn, args, options);
  const { pending, result, error } = state;

  if (pending) {
    if (typeof $waiting !== 'function') return $waiting;
    return <Async $fc={$waiting} state={state} />;
  }

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

  if (error) throw error;

  return result;
}
