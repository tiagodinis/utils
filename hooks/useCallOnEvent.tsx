import { AnyFunc } from "../helpers";
import { useEffect } from "react";

export const useCallOnEvent = (
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
