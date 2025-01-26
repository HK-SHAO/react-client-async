import { useCallback, useState } from 'react';

import { $signal, wrap } from 'react-client-async';
import delayWithSignal from '#utils/delayWithSignal';

const Rec = wrap<{ n: number; seed: number }>(
  async ({ [$signal]: signal, n, seed }) =>
    n <= 0 ? (
      <>
        <span>{n}</span>
      </>
    ) : (
      <>
        {await delayWithSignal(99, signal)}
        <span>{n}</span>
        <Rec n={n - 1} seed={seed} />
        <span>{n}</span>
      </>
    ),
);

Rec.displayName = 'Rec';

export default function RecursiveAsyncDemo() {
  const [seed, setSeed] = useState(0);

  const reload = useCallback(() => setSeed((prev) => prev + 1), []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-[42em] text-xs [&>.grid]:place-items-center [&_*]:rounded-full">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(2em,1fr))] min-h-28 inner-bg-text-flash">
          <Rec n={52} seed={seed} />
        </div>
      </div>
      <button
        type="button"
        className="flex justify-center items-center btn btn-blue"
        onClick={reload}
      >
        👆 Reload
        <span className="inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm">
          {seed}
        </span>
      </button>
    </div>
  );
}
