import { useCallback } from 'react';
import { useAsyncMemo } from '#src/lib';

import packageJsonUrl from '#constants/packageJsonUrl';
import delayWithSignal from '#utils/delayWithSignal';

type PackageJson = typeof import('#src/../package.json');

export default function LatestVersion() {
  const {
    state: { result: version = 'unknown', pending, error },
    load,
    stop,
  } = useAsyncMemo(
    async ({ signal }) => {
      const [ret] = await Promise.all([
        fetch(packageJsonUrl, { signal })
          .then((res) => res.json())
          .then((data: PackageJson) => data.version),
        // Avoid too fast loading
        delayWithSignal(400, signal),
      ]);
      return ret;
    },
    [
      // No dependencies
    ],
  );

  const onClick = useCallback(() => {
    if (pending) {
      stop();
    } else {
      load();
    }
  }, [pending, stop, load]);

  return (
    <>
      <button
        type="button"
        className="btn"
        disabled={pending}
        onClick={onClick}
      >
        {pending ? 'loading' : error ? 'latest' : `v${version}`}
      </button>
    </>
  );
}
