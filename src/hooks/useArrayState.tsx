import { useCallback, useMemo, useState } from "react";

//code to memoize arrays
export default function useArrayState(initial: unknown[] = []) {
  const array = useMemo(() => initial, []);
  const [refresh, setRefresh] = useState(0);

  const cb = useCallback((f: (arg0: unknown[]) => void) => {
    f(array);
    setRefresh((it) => ++it);
  }, []);

  return [array, cb];
}
