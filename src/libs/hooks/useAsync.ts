import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { propsAreEqual } from '#types/react';
import type { Awaitable } from '#types/utils';
import sameProps from '#utils/sameProps';

/**
 * The extras for the async function.
 */
type UseAsyncFnExtras = {
  /**
   * The signal to abort the async function.
   */
  signal: AbortSignal;
};

type UseAsyncFn<Args = unknown, Ret = unknown> = (
  /**
   * Arguments for the async function.
   */
  args: Args,
  /**
   * Extras control or information for the async function.
   */
  extras: UseAsyncFnExtras,
) => Awaitable<Ret>;

type UseAsyncObject<P, R> = {
  /**
   * If `true`, the async function will run automatically after the first render. Default is `true`.
   */
  autoLoad: boolean;
  /**
   * Determine the arguments are the same. Default is `sameProps`.
   */
  sameArgs: propsAreEqual<P>;
  /**
   * The default result of the async function.
   */
  defaultResult: R;
};

type UseAsyncOptions<P, R> = Partial<UseAsyncObject<P, R>>;

/**
 * The symbol for aborted by rerender.
 */
const $abortedByRerender = Symbol('Aborted By Rerender');

/**
 * The symbol for aborted by unmounted.
 */
const $abortedByUnmounted = Symbol('Aborted By Unmounted');

/**
 * The state of the async function.
 */
type State<Ret> = {
  /**
   * If `true`, the async function is pending.
   */
  pending: boolean | undefined;
  /**
   * The result of the async function.
   */
  result: Ret | undefined;
  /**
   * The error of the async function.
   */
  error: unknown;
};

/**
 * Return type of the useAsync hook.
 */
type UseAsyncReturn<Ret> = {
  /**
   * The pending state, result, and error.
   */
  state: State<Ret>;
  /**
   * Run the async function.
   */
  load: () => Promise<Ret>;
  /**
   * Stop the async function.
   */
  stop: (reason?: unknown) => void;
};

/**
 * The useAsync hook allows you to run an async function with options.
 * @param promiseFn The async function to run.
 * @param args Arguments for the async function.
 * @param options Options for using the async function.
 * @returns The task state and controllers.
 * @todo
 * - Support hooks in async function components.
 *   - Approach 1: Move `promiseFn` to before the early return.
 *   - Approach 2: Create a new function component to support hooks.
 */
function useAsync<Args, Ret>(
  /**
   * The async function to run.
   */
  promiseFn: UseAsyncFn<Args, Ret>,
  /**
   * Arguments for the async function.
   */
  args: Args,
  /**
   * Options for using the async function.
   */
  options: UseAsyncOptions<Args, Ret> = {},
): UseAsyncReturn<Ret> {
  // Set default options.
  options.autoLoad ??= true;
  options.sameArgs ??= sameProps;

  // Get the default result.
  const defaultResult = options.defaultResult;

  const [pending, setPending] = useState<boolean>();
  const [result, setResult] = useState(defaultResult);
  const [error, setError] = useState<unknown>();

  const abortCtlRef = useRef<AbortController>(null);
  const fnRef = useRef(promiseFn);
  const argsRef = useRef(args);

  // The resolvers for the async function.
  type Resolvers = PromiseWithResolvers<Ret>;
  const resolversRef = useRef<Resolvers>(null);

  // The refresh state to force rerender.
  const [refresh, setRefresh] = useState(Symbol());
  const refreshRef = useRef(refresh);

  // Abort the async function when unmounted.
  useEffect(() => () => abortCtlRef.current?.abort($abortedByUnmounted), []);

  // The state of the async function.
  const state = useMemo(
    () => ({ pending, result, error }),
    [pending, result, error],
  );

  // The load function to run the async function.
  const load = useCallback(() => {
    setRefresh(() => Symbol());
    resolversRef.current = Promise.withResolvers();
    return resolversRef.current.promise;
  }, []);

  // The stop function to stop the async function.
  const stop = useCallback((reason: unknown) => {
    abortCtlRef.current?.abort(reason);
  }, []);

  // Create the hook return.
  const hookReturn = useMemo<UseAsyncReturn<Ret>>(
    () => ({ state, load, stop }),
    [state, load, stop],
  );

  // Check if no need to rerun the async function.
  const sameFn = fnRef.current === promiseFn;
  const sameArgs = options.sameArgs?.(argsRef.current, args);
  const sameRefresh = refreshRef.current === refresh;
  const notFirstRun = pending != null || !options.autoLoad;
  const noChange = sameFn && sameArgs && sameRefresh && notFirstRun;
  const reason = abortCtlRef.current?.signal.reason;

  // If no change and not aborted, return the hook return.
  if (noChange && reason !== $abortedByUnmounted) return hookReturn;

  // Update the references.
  fnRef.current = promiseFn;
  argsRef.current = args;
  refreshRef.current = refresh;

  // Set the pending state.
  setPending(true);

  // Create the abort controller and signal.
  const abortCtl = new AbortController();
  const signal = abortCtl.signal;

  // Abort the previous async function.
  abortCtlRef.current?.abort($abortedByRerender);
  abortCtlRef.current = abortCtl;

  // Get the current resolvers.
  const curResolvers = resolversRef.current;

  // Run the async function and get the promise.
  Promise.resolve(promiseFn(args, { signal }))
    // Set the result and clear the error.
    .then((result) => {
      setError(undefined);
      setResult(() => result);
      curResolvers?.resolve(result);
    })
    // Set the error and clear the result.
    .catch((error) => {
      setError(() => error);
      curResolvers?.reject(error);
    })
    // Clear the pending state.
    .finally(() => {
      const abortSignal = abortCtlRef.current?.signal;
      if (abortSignal !== signal) return;
      setPending(false);
    });

  // Return the hook return.
  return hookReturn;
}

export {
  useAsync as default,
  $abortedByRerender,
  $abortedByUnmounted,
  type State,
  type UseAsyncFn,
  type UseAsyncFnExtras,
  type UseAsyncOptions,
};
