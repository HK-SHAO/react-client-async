import { useCallback, useRef, useState } from 'react';
import type { propsAreEqual } from '../types/react';
import type { Awaitable } from '../types/utils';
import sameProps from '../utils/sameProps';

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

type RunAsync<Ret> = (signal?: AbortSignal) => Promise<Ret>;
type UseAsyncObject<P> = {
  /**
   * If `true`, the async function will run automatically.
   */
  autoLoad: boolean;
  /**
   * Determine the arguments are the same.
   */
  sampeArgs: propsAreEqual<P>;
};

type UseAsyncOptions<P> = Partial<UseAsyncObject<P>>;

/**
 * The symbol for aborted by rerender.
 */
const $abortedByRerender = Symbol('Aborted By Rerender');

/**
 * The symbol for aborted by user.
 */
const $abortedByStop = Symbol('Aborted By Stop');

/**
 * Return type of the useAsync hook.
 */
type UseAsyncReturn<Ret> = {
  /**
   * The pending state, result, and error.
   */
  state: {
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
   * Run the async function.
   */
  load: RunAsync<Ret>;
  /**
   * Stop the async function.
   */
  stop: () => void;
};

/**
 * The useAsync hook allows you to run an async function with options.
 * @param promiseFn The async function to run.
 * @param args Arguments for the async function.
 * @param options Options for using the async function.
 * @returns The pending state, result, and error.
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
  options: UseAsyncOptions<Args> = {},
): UseAsyncReturn<Ret> {
  // Set default options
  options.autoLoad ??= false;
  options.sampeArgs ??= sameProps;

  const [pending, setPending] = useState<boolean>();
  const [result, setResult] = useState<Ret>();
  const [error, setError] = useState<unknown>();

  const abortCtlRef = useRef<AbortController>(null);
  const fnRef = useRef(promiseFn);
  const argsRef = useRef(args);

  // The resolvers for the async function.
  type Resolvers = ReturnType<typeof Promise.withResolvers<Ret>>;
  const resolversRef = useRef<Resolvers>(null);

  // The refresh state to force rerender.
  const [refresh, setRefresh] = useState(0);
  const refreshRef = useRef(refresh);

  // The load function to run the async function.
  const load = useCallback<RunAsync<Ret>>((signal) => {
    signal?.addEventListener('abort', () => {
      const abortCtl = abortCtlRef.current;
      abortCtl?.abort(signal.reason);
    });

    setRefresh((n) => (n + 1) % 3);

    resolversRef.current = Promise.withResolvers();
    return resolversRef.current.promise;
  }, []);

  // The stop function to stop the async function.
  const stop = useCallback(() => {
    const abortCtl = abortCtlRef.current;
    abortCtl?.abort($abortedByStop);
  }, []);

  // Check if no need to rerun the async function.
  const sameFn = fnRef.current === promiseFn;
  const sameArgs = options.sampeArgs?.(argsRef.current, args);
  const sameRefresh = refreshRef.current === refresh;
  const notFirstRun = pending !== undefined || !options.autoLoad;
  const noChange = sameFn && sameArgs && sameRefresh && notFirstRun;

  // Create the state object.
  const state = { pending, result, error };
  // Create the hook return.
  const hookReturn = { state, load, stop };

  // If no change, return the previous state.
  if (noChange) return hookReturn;

  // Update the references.
  fnRef.current = promiseFn;
  argsRef.current = args;
  refreshRef.current = refresh;

  // Set the pending state.
  setPending(true);

  const abortCtl = new AbortController();
  const signal = abortCtl.signal;
  const awaitable = promiseFn(args, { signal });
  const promise = Promise.resolve(awaitable);

  // Abort the previous async function.
  abortCtlRef.current?.abort($abortedByRerender);
  abortCtlRef.current = abortCtl;

  // Get the current resolvers.
  const curResolvers = resolversRef.current;

  promise
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
  $abortedByStop,
  type UseAsyncFn,
  type UseAsyncOptions,
};
