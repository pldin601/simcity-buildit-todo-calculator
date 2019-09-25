import { useEffect, useState } from "react";

export default function usePersistentState<T>(
  stateKey: string,
  initialState: any = null
) {
  const initialRaw = localStorage.getItem(stateKey);

  const initial = initialRaw == null ? initialState : JSON.parse(initialRaw);

  const [state, setState] = useState(initial);

  useEffect(() => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateKey, serializedState);
  }, [state, stateKey]);

  return [state, setState];
}
