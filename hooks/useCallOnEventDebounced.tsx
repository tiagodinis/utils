import { AnyFunc } from "../helpers";
import { useEffect } from "react";

// TODO: create a debounced hook

export const useCallOnDebouncedEvent = (
  eventName: string,
  callback: AnyFunc,
  runBefore = false
) => {
  useEffect(() => {
    if (runBefore) {
      callback();
    }
    window.addEventListener(eventName, callback);

    return () => window.removeEventListener(eventName, callback);
  }, [callback, runBefore]);
};
