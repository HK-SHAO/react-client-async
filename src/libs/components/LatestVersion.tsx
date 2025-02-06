import { useAsync } from '#src/lib';

import delayWithSignal from '../utils/delayWithSignal';

async function getLatestVersion(_: null, { signal }: { signal: AbortSignal }) {
  const [version] = await Promise.all([
    // ToDo: Dynamic import with signal
    import('#constants/version').then((m) => m.default),
    delayWithSignal(400, signal),
  ]);
  return version;
}

export default function LatestVersion() {
  const {
    state: { result: version = 'unknown', pending, error },
  } = useAsync(getLatestVersion, null);

  return (
    <>
      <div className="place-items-center grid bg-blue-600 dark:bg-blue-800 px-2 rounded-md font-bold font-stretch-120% text-white">
        {pending ? 'loading' : error ? 'latest' : `v${version}`}
      </div>
    </>
  );
}
