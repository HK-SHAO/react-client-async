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
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15em"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="m-1"
          >
            <title>reload</title>
            <rect width="16" height="6" x="2" y="2" rx="2" />
            <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect width="4" height="6" x="8" y="16" rx="1" />
          </svg>
        </button>

        <button
          type="button"
          className="flex flex-1 justify-center items-center btn btn-red"
          onClick={refresh}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15em"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="m-1"
          >
            <title>refresh</title>
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>
        </button>
      </div>
      <div
        className="place-items-center grid grid-cols-[repeat(auto-fill,minmax(1.75em,1fr))] inner-bg-flash p-3 rounded-md [&_*]:rounded-full w-full h-fit prose-pre"
        style={{ textShadow: 'rgba(0, 0, 0, 0.1) 0px 1px' }}
      >
        {hide ? null : <Rec n={52} seed={seed} />}
      </div>
    </div>
  );
}
