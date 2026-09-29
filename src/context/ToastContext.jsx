import { useCallback, useRef, useState } from "react";
import { ToastContext } from "./toast";

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef();

  const toast = useCallback((msg) => {
    setMessage(msg);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 1800);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div id="toast" className={visible ? "show" : ""} role="status" aria-live="polite">
        {message}
      </div>
    </ToastContext.Provider>
  );
}
