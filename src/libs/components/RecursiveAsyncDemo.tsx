import { type FC, useCallback, useState } from 'react';

import { $signal, wrap } from 'react-client-async';
import delayWithSignal from '#utils/delayWithSignal';
import { hashTo01Float } from '#utils/hash';

const Rec: FC<{ n: number; seed: number }> = wrap(
  async ({ [$signal]: signal, n, seed }) => {
    await delayWithSignal(99, signal);
    const baseHue = hashTo01Float(seed) * 360;
    return n <= 0 ? (
      <>
        <span style={{ color: `oklch(0.623 0.214 ${baseHue + 0})` }}>{n}</span>
      </>
    ) : (
      <>
        <span style={{ color: `oklch(0.623 0.214 ${baseHue + n})` }}>{n}</span>
        <Rec n={n - 1} seed={seed} />
        <span style={{ color: `oklch(0.623 0.214 ${baseHue - n})` }}>{n}</span>
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
      <div className="flex gap-4 mb-2 w-full">
        <button
          type="button"
          className="flex flex-1 justify-center items-center btn btn-blue"
          onClick={reload}
        >
          Recolor
        </button>

        <button
          type="button"
          className="flex flex-1 justify-center items-center btn btn-red"
          onClick={refresh}
        >
          Refresh
        </button>
      </div>
      <div
        className="place-items-center grid grid-cols-[repeat(21,minmax(0,1fr))] inner-bg-flash p-3 rounded-md [&_*]:rounded-full w-full h-fit prose-pre"
        style={{ textShadow: 'rgba(0, 0, 0, 0.1) 0px 1px' }}
      >
        {hide ? null : <Rec n={52} seed={seed} />}
      </div>
    </div>
  );
}
