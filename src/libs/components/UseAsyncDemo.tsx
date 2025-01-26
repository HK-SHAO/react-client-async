import { type RefObject, useCallback, useRef } from 'react';

import { useAsync } from 'react-client-async';
import { ObjectInspector, chromeDark } from 'react-inspector';
import { toast } from 'react-toastify';
import delayWithSignal from '#utils/delayWithSignal';

const inspectorTheme: typeof chromeDark = {
  ...chromeDark,
  ...{
    BASE_BACKGROUND_COLOR: 'transparent',
    BASE_FONT_SIZE: 'var(--text-sm)',
    ARROW_FONT_SIZE: 'var(--text-sm)' as unknown as number,
    TREENODE_FONT_SIZE: 'var(--text-sm)',
  },
};

const abortedByStop = Symbol('Aborted By Stop');

const fetchSome = async (
  { cntRef }: { cntRef: RefObject<number> },
  { signal }: { signal: AbortSignal },
) => {
  await delayWithSignal(1000, signal);
  return `${++cntRef.current} times`;
};

export default function UseAsyncDemo() {
  const cntRef = useRef(0);
  const task = useAsync(fetchSome, { cntRef });

  const load = useCallback(async () => {
    toast.promise(task.load(), {
      pending: 'Promise is pending',
      success: { render: ({ data }) => `Result: ${String(data)}` },
      error: { render: ({ data }) => `Error: ${String(data)}` },
    });
  }, [task.load]);

  const stop = useCallback(() => task.stop(abortedByStop), [task.stop]);

  const { pending } = task.state;

  return (
    <div className="flex flex-col justify-center items-center gap-2 py-4 p-2 rounded-lg prose-pre">
      <ObjectInspector
        data={task}
        expandLevel={3}
        theme={inspectorTheme as unknown as 'chromeDark'}
      />

      <div className="bg-gray-500/10 m-2 py-[0.5px] w-full" />
      <div className="flex gap-4">
        <button
          type="button"
          className="text-base btn btn-blue"
          onClick={load}
          disabled={pending}
        >
          {pending ? 'Loading...' : 'Load'}
        </button>
        <button
          type="button"
          className="text-base btn btn-red"
          onClick={stop}
          disabled={!pending}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
