import { useMemo } from 'react';
import { ObjectInspector } from 'react-inspector';
import inspectorTheme from '#constants/inspectorTheme';
import packageJsonUrl from '#constants/packageJsonUrl';
import { useAsyncMemo } from '#src/lib';
import delayWithSignal from '../utils/delayWithSignal';

type PackageJson = typeof import('#src/../package.json');

const whiteList = ['name', 'version', 'author', 'license', 'homepage'];
const whiteListSet = new Set(whiteList);

export default function UseAsyncMemoDemo() {
  const {
    state: { result, pending, error },
    load,
    stop,
  } = useAsyncMemo(
    ({ signal }) =>
      delayWithSignal(200, signal)
        .then(() => fetch(packageJsonUrl, { signal }))
        .then((res) => res.json() as Promise<PackageJson>),
    [
      /* No dependencies */
    ],
    { autoLoad: false },
  );

  const res = useMemo(
    () =>
      result && typeof result === 'object'
        ? Object.fromEntries(
            Object.entries(result).filter(([key]) => whiteListSet.has(key)),
          )
        : result,
    [result],
  );

  const data = useMemo(
    () => ({ result: res, pending, error }),
    [res, pending, error],
  );

  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-2 py-4 p-2 rounded-md prose-pre"
        style={{ textShadow: 'rgba(0, 0, 0, 0.3) 0px 1px' }}
      >
        <div className="w-full">
          <ObjectInspector
            data={data}
            expandLevel={res ? 3 : 0}
            theme={inspectorTheme}
          />
        </div>

        <div className="bg-gray-500/10 m-2 py-[0.5px] w-full" />
        <div className="flex gap-4 w-[24em]">
          <button
            type="button"
            className="flex-1 text-base btn btn-blue"
            onClick={load}
            disabled={pending}
          >
            {pending ? 'Loading...' : 'Load'}
          </button>
          <button
            type="button"
            className="flex-1 text-base btn btn-red"
            onClick={() => stop(Symbol('Stop'))}
            disabled={!pending}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
}
