import { AnyFunc } from "../helpers";
import { useEffect } from "react";

export const useCallOnEvent = (
  eventName: string,
  callback: AnyFunc,
  callOnceBefore = false
) => {
  useEffect(() => {
    callOnceBefore && callback();
    window.addEventListener(eventName, callback);
    return () => window.removeEventListener(eventName, callback);
  }, [callback, callOnceBefore]);
};
