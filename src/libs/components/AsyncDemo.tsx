import { memo, useCallback, useMemo, useState } from 'react';
import {
  $signal,
  Async,
  type AsyncFC,
  type FallbackFC,
} from 'react-client-async';
import delayWithSignal from '../utils/delayWithSignal';

type DelayProps = {
  count: number;
  addCount: () => void;
};

const DelayWithRandomError: AsyncFC<DelayProps> = memo(
  async ({ count, addCount, [$signal]: signal }) => {
    await delayWithSignal(1000, signal);

    // Randomly throw an error.
    if (Math.random() < 0.5) {
      throw new Error('Random Error');
    }

    return (
      <button
        type="button"
        className="flex justify-center items-center ml-2 btn btn-blue"
        onClick={addCount}
      >
        Async Component
        <span className="inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm">
          {count}
        </span>
      </button>
    );
  },
);

export default function AsyncDemo() {
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const fallback = useCallback<FallbackFC>(
    ({ state }) => (
      <button
        type="button"
        className="flex justify-center items-center ml-2 btn btn-red"
        onClick={addCount}
      >
        {state.error instanceof Error ? state.error.message : 'Unknown Error'}
        <span className="inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm">
          {count}
        </span>
      </button>
    ),
    [count, addCount],
  );

  const waiting = useMemo(
    () => (
      <button
        type="button"
        className="flex justify-center items-center ml-2 btn btn-gray"
        onClick={addCount}
      >
        Loading...
        <span className="inline bg-black/30 ml-2 px-4 py-0.5 rounded-full text-sm">
          {count}
        </span>
      </button>
    ),
    [count, addCount],
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <Async
        $fc={DelayWithRandomError}
        $waiting={waiting}
        $fallback={fallback}
        // The props for the async component.
        {...{ count, addCount }}
      />
    </div>
  );
}
