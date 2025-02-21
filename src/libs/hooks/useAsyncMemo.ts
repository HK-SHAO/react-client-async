import { type DependencyList, useMemo } from 'react';

import useAsync, {
  type UseAsyncFn,
  type UseAsyncFnExtras,
  type UseAsyncOptions,
} from '#hooks/useAsync';

export default function useAsyncMemo<T>(
  promiseFn: (extras: UseAsyncFnExtras) => Promise<T>,
  deps: DependencyList,
  options: UseAsyncOptions<null, T> = {},
) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: only deps are needed
  const fn = useMemo<UseAsyncFn<null, T>>(
    () => (_, extras) => promiseFn(extras),
    deps,
  );
  return useAsync(fn, null, options);
}
