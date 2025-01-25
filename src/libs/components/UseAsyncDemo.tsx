import { type RefObject, useCallback, useRef } from 'react';
import { type UseAsyncFn, useAsync } from 'react-client-async';
import { ObjectInspector, chromeLight } from 'react-inspector';
import delayWithSignal from '#utils/delayWithSignal';

import { toast } from 'react-toastify';

const inspectorTheme: typeof chromeLight = {
  ...chromeLight,
  ...{
    BASE_BACKGROUND_COLOR: 'transparent',
    BASE_FONT_SIZE: 'var(--text-sm)',
    ARROW_FONT_SIZE: 'var(--text-sm)' as unknown as number,
    TREENODE_FONT_SIZE: 'var(--text-sm)',
  },
};

type FetchSome = UseAsyncFn<{ cntRef: RefObject<number> }, string>;
const fetchSome: FetchSome = async ({ cntRef }, { signal }) => {
  await delayWithSignal(1000, signal);
  return `${++cntRef.current} times`;
};

export default function UseAsyncDemo() {
  const cntRef = useRef(0);
  const task = useAsync(fetchSome, { cntRef });

  const load = useCallback(async () => {
    toast.promise(task.load(), {
      pending: 'Promise is pending',
      success: {
        render({ data }) {
          return `Result: ${String(data)}`;
        },
      },
      error: {
        render({ data }) {
          return `Error: ${String(data)}`;
        },
      },
    });
  }, [task.load]);

  const stop = useCallback(() => task.stop(), [task.stop]);

  const { pending } = task.state;

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-gray-200/10 py-4 p-2 rounded-lg">
      <div className="dark:invert">
        <ObjectInspector
          data={task}
          expandLevel={3}
          // @ts-expect-error
          theme={inspectorTheme}
        />
      </div>

      <div className="bg-gray-500/10 m-2 py-[0.5px] w-full" />
      <div className="flex gap-4">
        <button
          type="button"
          className="btn btn-blue"
          onClick={load}
          disabled={pending}
        >
          {pending ? 'Loading...' : 'Load'}
        </button>
        <button
          type="button"
          className="btn btn-red"
          onClick={stop}
          disabled={!pending}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
