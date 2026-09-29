import { useCallback, useEffect, useRef, useState } from "react";
import { readJSON, writeJSON } from "../lib/storage";

// State that lives in localStorage and stays in sync across components and tabs.
export default function useLocalStorage(key, fallback) {
  const fallbackRef = useRef(fallback);
  const [value, setValue] = useState(() => readJSON(key, fallback));

  useEffect(() => {
    const sync = (e) => {
      if (e.key === key || e.detail === key) setValue(readJSON(key, fallbackRef.current));
    };
    window.addEventListener("storage", sync);
    window.addEventListener("kishoo-storage", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("kishoo-storage", sync);
    };
  }, [key]);

  const update = useCallback(
    (next) => {
      const resolved = typeof next === "function" ? next(readJSON(key, fallbackRef.current)) : next;
      writeJSON(key, resolved);
      setValue(resolved);
    },
    [key]
  );

  return [value, update];
}
