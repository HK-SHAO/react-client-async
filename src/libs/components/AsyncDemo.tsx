import { memo, useCallback, useMemo, useState } from 'react';

import {
  $signal,
  Async,
  type AsyncFC,
  type StateFC,
} from 'react-client-async';
import delayWithSignal from '#utils/delayWithSignal';

const DelayWithError: AsyncFC<{
  count: number;
  addCount: () => void;
}> = memo(async ({ [$signal]: signal, count, addCount }) => {
  await delayWithSignal(1000, signal);

  if (count % 2 !== 0) throw new Error('Error when number is odd');

  return (
    <button
      type="button"
      className="flex justify-center items-center w-full btn btn-blue"
      onClick={addCount}
    >
      Async component has loaded
      <span className="inline bg-black/20 ml-2 px-4 py-0.5 rounded-full text-sm">
        {count}
      </span>
    </button>
  );
});

export default function AsyncDemo() {
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const fallback = useCallback<StateFC>(
    ({ state }) => (
      <button
        type="button"
        className="flex justify-center items-center w-full btn btn-red"
        onClick={addCount}
      >
        {state.error instanceof Error ? state.error.message : 'Unknown Error'}
        <span className="inline bg-black/20 ml-2 px-4 py-0.5 rounded-full text-sm">
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
        className="flex justify-center items-center w-full btn btn-gray"
        onClick={addCount}
      >
        Loading...
        <span className="inline bg-black/20 ml-2 px-4 py-0.5 rounded-full text-sm">
          {count}
        </span>
      </button>
    ),
    [count, addCount],
  );

  return (
    <div className="flex flex-col items-center gap-2">
      <Async
        $fc={DelayWithError}
        $waiting={waiting}
        $fallback={fallback}
        // The props for the async component.
        {...{ count, addCount }}
      />
    </div>
  );
}
