import { Assertion, test } from "../helpers";
import { round } from ".";

const roundAssertions: Assertion<[number, number], number>[] = [
  {
    description: "Rounding to zero decimal places",
    input: [3.14159, 0],
    expected: 3,
  },
  {
    description: "Rounding with negative decimal places",
    input: [43.14159, -2],
    expected: 0,
  },
  {
    description: "Rounding a negative number with decimal places",
    input: [-3.14159, 3],
    expected: -3.142,
  },
  {
    description: "Rounding a large number with decimal places",
    input: [1234567890.123456789, 5],
    expected: 1234567890.12346,
  },
  {
    description: "Rounding with decimal places exceeding precision",
    input: [1.234, 10],
    expected: 1.234,
  },
  {
    description: "Rounding a number with trailing nines",
    input: [1.9999, 3],
    expected: 2,
  },
  {
    description: "Rounding a very large number",
    input: [1e20, 2],
    expected: 1e20,
  },
  {
    description: "Rounding a very small number",
    input: [1e-20, 5],
    expected: 0,
  },
  {
    description: "Rounding with decimal places set to zero",
    input: [123.546, 0],
    expected: 124,
  },
];

test(round, roundAssertions);
