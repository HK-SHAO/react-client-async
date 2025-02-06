import { type DependencyList, useMemo } from 'react';

import useAsync, {
  type UseAsyncFn,
  type UseAsyncFnExtras,
} from '#hooks/useAsync';

export default function useAsyncMemo<T>(
  promiseFn: (extras: UseAsyncFnExtras) => Promise<T>,
  deps: DependencyList,
) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: only deps are needed
  const fn = useMemo<UseAsyncFn<null, T>>(
    () => (_, extras) => promiseFn(extras),
    deps,
  );
  return useAsync(fn, null);
}
