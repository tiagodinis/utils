export class EventEmitter {
  constructor() {
    this.events = {};
  }

  off(name, listener) {
    if (this.events[name]) {
      const index = this.events[name].indexOf(listener);

      if (index !== -1) {
        this.events[name].splice(index, 1);
      }
    }
  }
  on(name, listener) {
    (this.events[name] || (this.events[name] = [])).push(listener);
  }

  trigger(name, ...args) {
    this.events[name]?.forEach((listener) => listener(...args));
  }
}
