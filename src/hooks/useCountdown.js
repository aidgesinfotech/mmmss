import { useEffect, useState } from "react";

// One shared 1s interval for every timer on screen, counting down to midnight.
const listeners = new Set();
let intervalId = null;

function untilMidnight() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  const diff = Math.max(0, end - now);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(Math.floor(diff / 3.6e6))}h:${pad(Math.floor((diff % 3.6e6) / 6e4))}m:${pad(Math.floor((diff % 6e4) / 1000))}s`;
}

export default function useCountdown() {
  const [text, setText] = useState(untilMidnight);

  useEffect(() => {
    listeners.add(setText);
    if (!intervalId) {
      intervalId = setInterval(() => {
        const next = untilMidnight();
        listeners.forEach((fn) => fn(next));
      }, 1000);
    }
    return () => {
      listeners.delete(setText);
      if (!listeners.size) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  }, []);

  return text;
}
