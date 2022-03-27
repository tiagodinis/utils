// -- Types ---------------------------------------------------------

type AnyFunc = (...args: any[]) => any;
export type Assertion<T0 extends any[], T1> = {
  description: string;
  input: [...T0];
  expected: T1;
};

// -- Functions -----------------------------------------------------
export const createAliasFunction =
  <T extends AnyFunc>(fn: T, ...args: Parameters<T>) =>
  () =>
    fn.apply(null, args);

export const test = <T0 extends any[], T1>(
  fn: AnyFunc,
  assertions: Assertion<T0, T1>[]
) => {
  let nothingFailed = true;

  assertions.forEach(({ description, input, expected }) => {
    const output = fn(...input);
    if (output !== expected) {
      nothingFailed = false;
      console.log(`${description}: expected ${expected}, but got ${output}`);
    }
  });

  nothingFailed && console.log("All good!");
};
