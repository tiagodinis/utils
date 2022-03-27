export function runFor(callback, iterations) {
  for (let i = 0; i < iterations; i++) callback(i);
}

export function runWhileReturnSameTo(callback, value) {
  let res = callback();

  while (res === value) {
    res = callback();
  }

  return res;
}

export function rafWhile(conditionCallback, thenCallback) {
  const step = () =>
    conditionCallback() ? window.requestAnimationFrame(step) : thenCallback();

  window.requestAnimationFrame(step);
}

// TODO: toggle variable/object
// TODO: sequence object
