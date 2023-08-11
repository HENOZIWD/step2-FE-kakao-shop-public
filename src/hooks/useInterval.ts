import { useEffect, useRef } from 'react';

export function useInterval(callback: (...args: any[]) => any, delay: number) {
  const savedCallback = useRef<(...args: any[]) => any>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current !== undefined) {
        savedCallback.current();
      }
    };

    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
}
