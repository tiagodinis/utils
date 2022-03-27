import { clamp } from "../to_build/number/number";

export function targetApproach(
  cursor: number,
  target: number,
  approachP: number
) {
  return cursor + (target - cursor) * approachP;
}

export function lerp(percentage: number, start: number, end: number) {
  return start + (end - start) * clamp(percentage, 0, 1);
}

// Ease generalization (https://arxiv.org/abs/2010.09714)
// Visualization: https://www.desmos.com/calculator/t9uwpot2of?lang=en-US
export function ease(cursor, gain, bias, clampPercentage = true) {
  // Gain received as an easy to use [-1, 1] range
  // which is denormalized into a [0,∞] range to use in the Barron generalization
  const errorMargin = 0.0000000001;
  const denormalizedGain =
    gain <= 0
      ? (-(Math.pow(-gain, 0.5) / 2) + 0.5) * 2
      : -1 / ((Math.pow(gain, 0.5) / 2 + 0.5 - 0.5) * 2 - 1 - errorMargin);

  const value =
    cursor < bias
      ? (bias * cursor) /
        (cursor + denormalizedGain * (bias - cursor) + errorMargin)
      : ((1 - bias) * (cursor - 1)) /
          (1 - cursor - denormalizedGain * (bias - cursor) + errorMargin) +
        1;

  return clampPercentage ? clamp(value, 0, 1) : value;
}

// -- In -----------------------------------------------------------------

export function easeInSine(cursor) {
  return 1 - Math.cos((cursor * Math.PI) / 2);
}

export function easeInQuad(cursor) {
  return cursor * cursor;
}

export function easeInCubic(cursor) {
  return cursor * cursor * cursor;
}

export function easeInQuart(cursor) {
  return cursor * cursor * cursor * cursor;
}

export function easeInQuint(cursor) {
  return cursor * cursor * cursor * cursor * cursor;
}

export function easeInExpo(cursor) {
  return cursor === 0 ? 0 : Math.pow(2, 10 * cursor - 10);
}

export function easeInCirc(cursor) {
  return 1 - Math.sqrt(1 - Math.pow(cursor, 2));
}

export function easeInBack(cursor) {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return c3 * cursor * cursor * cursor - c1 * cursor * cursor;
}

// -- Out ----------------------------------------------------------------

export function easeOutSine(cursor) {
  return Math.sin((cursor * Math.PI) / 2);
}

export function easeOutQuad(cursor) {
  return 1 - (1 - cursor) * (1 - cursor);
}

export function easeOutCubic(cursor) {
  return 1 - Math.pow(1 - cursor, 3);
}

export function easeOutQuart(cursor) {
  return 1 - Math.pow(1 - cursor, 4);
}

export function easeOutQuint(cursor) {
  return 1 - Math.pow(1 - cursor, 5);
}

export function easeOutExpo(cursor) {
  return cursor === 1 ? 1 : 1 - Math.pow(2, -10 * cursor);
}

export function easeOutCirc(cursor) {
  return Math.sqrt(1 - Math.pow(cursor - 1, 2));
}

export function easeOutBack(cursor) {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return 1 + c3 * Math.pow(cursor - 1, 3) + c1 * Math.pow(cursor - 1, 2);
}

export function easeOutElastic(cursor) {
  const c4 = (2 * Math.PI) / 3;

  return cursor === 0
    ? 0
    : cursor === 1
    ? 1
    : Math.pow(2, -10 * cursor) * Math.sin((cursor * 10 - 0.75) * c4) + 1;
}

export function easeOutBounce(cursor) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (cursor < 1 / d1) {
    return n1 * cursor * cursor;
  } else if (cursor < 2 / d1) {
    return n1 * (cursor -= 1.5 / d1) * cursor + 0.75;
  } else if (cursor < 2.5 / d1) {
    return n1 * (cursor -= 2.25 / d1) * cursor + 0.9375;
  }

  return n1 * (cursor -= 2.625 / d1) * cursor + 0.984375;
}

// -- InOut --------------------------------------------------------------

export function easeInOutSine(cursor) {
  return -(Math.cos(Math.PI * cursor) - 1) / 2;
}

export function easeInOutQuad(cursor) {
  return cursor < 0.5
    ? 2 * cursor * cursor
    : 1 - Math.pow(-2 * cursor + 2, 2) / 2;
}

export function easeInOutCubic(cursor) {
  return cursor < 0.5
    ? 4 * cursor * cursor * cursor
    : 1 - Math.pow(-2 * cursor + 2, 3) / 2;
}

export function easeInOutQuart(cursor) {
  return cursor < 0.5
    ? 8 * cursor * cursor * cursor * cursor
    : 1 - Math.pow(-2 * cursor + 2, 4) / 2;
}

export function easeInOutQuint(cursor) {
  return cursor < 0.5
    ? 16 * cursor * cursor * cursor * cursor * cursor
    : 1 - Math.pow(-2 * cursor + 2, 5) / 2;
}

export function easeInOutExpo(cursor) {
  return cursor === 0
    ? 0
    : cursor === 1
    ? 1
    : cursor < 0.5
    ? Math.pow(2, 20 * cursor - 10) / 2
    : (2 - Math.pow(2, -20 * cursor + 10)) / 2;
}

export function easeInOutCirc(cursor) {
  return cursor < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * cursor, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * cursor + 2, 2)) + 1) / 2;
}

export function easeInOutBack(cursor) {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;

  return cursor < 0.5
    ? (Math.pow(2 * cursor, 2) * ((c2 + 1) * 2 * cursor - c2)) / 2
    : (Math.pow(2 * cursor - 2, 2) * ((c2 + 1) * (cursor * 2 - 2) + c2) + 2) /
        2;
}

export function easeInOutElastic(cursor) {
  const c5 = (2 * Math.PI) / 4.5;

  return cursor === 0
    ? 0
    : cursor === 1
    ? 1
    : cursor < 0.5
    ? -(Math.pow(2, 20 * cursor - 10) * Math.sin((20 * cursor - 11.125) * c5)) /
      2
    : (Math.pow(2, -20 * cursor + 10) * Math.sin((20 * cursor - 11.125) * c5)) /
        2 +
      1;
}
