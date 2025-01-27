import { type FC, useCallback, useState } from 'react';

import { $signal, wrap } from 'react-client-async';
import delayWithSignal from '#utils/delayWithSignal';
import { hashTo01Float } from '#utils/hash';

const Rec: FC<{ n: number; seed: number }> = wrap(
  async ({ [$signal]: signal, n, seed }) => {
    const baseHue = hashTo01Float(seed) * 360;
    return n <= 0 ? (
      <>
        <span
          style={{
            color: `oklch(0.623 0.214 ${baseHue})`,
          }}
        >
          {n}
        </span>
      </>
    ) : (
      <>
        {await delayWithSignal(99, signal)}
        <span
          style={{
            color: `oklch(0.623 0.214 ${baseHue + n})`,
          }}
        >
          {n}
        </span>
        <Rec n={n - 1} seed={seed} />
        <span
          style={{
            color: `oklch(0.623 0.214 ${baseHue - n})`,
          }}
        >
          {n}
        </span>
      </>
    );
  },
);

Rec.displayName = 'Rec';

export default function RecursiveAsyncDemo() {
  const [seed, setSeed] = useState(0);
  const [hide, setHide] = useState(false);

  const reload = useCallback(() => setSeed((n) => n + 1), []);

  const refresh = useCallback(() => {
    requestAnimationFrame(() => setHide(false));
    setHide(true);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-[42em] text-xs [&>.grid]:place-items-center [&_*]:rounded-full font-bold">
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(2em,1fr))] text-shadow min-h-28 inner-bg-text-flash"
          style={{ textShadow: 'rgba(0, 0, 0, 0.1) 0px 1px' }}
        >
          {hide ? null : <Rec n={52} seed={seed} />}
        </div>
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="flex justify-center items-center btn btn-blue"
          onClick={reload}
        >
          🎨 Reload
          <span className="inline bg-black/20 ml-2 px-4 py-0.5 rounded-full text-sm">
            {seed}
          </span>
        </button>

        <button
          type="button"
          className="flex justify-center items-center btn btn-red"
          onClick={refresh}
        >
          ⟳
        </button>
      </div>
    </div>
  );
}
