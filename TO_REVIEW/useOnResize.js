import { useEffect } from "react";

// TODO: make this generic, just pass the event you want

export function useOnResize(callback, runBefore = false) {
  useEffect(() => {
    if (runBefore) {
      callback();
    }
    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
  }, [callback, runBefore]);
}
