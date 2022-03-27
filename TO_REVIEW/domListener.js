import { EventEmitter } from "./eventEmitter";

// TODO: change name to indicate it is a debounced event listener
export class DomListener extends EventEmitter {
  constructor(eventName, getArgs) {
    super();
    this.eventName = eventName;

    let debounceTimeoutId;

    this.handleEvent = () => {
      cancelAnimationFrame(debounceTimeoutId);

      debounceTimeoutId = requestAnimationFrame(() =>
        this.trigger(this.eventName, getArgs())
      );
    };
    this.handleEvent();

    window.addEventListener(this.eventName, this.handleEvent);
  }

  dispose() {
    window.removeEventListener(this.eventName, this.handleEvent);
  }
}
