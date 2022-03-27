export const range = (start: number, end: number) => {
  if (start > end) {
    throw new Error("Start value cannot be greater than end value");
  }

  return [start, end];
};

export const round = (num: number, decimalPlaces: number) => {
  const factor = Math.pow(10, decimalPlaces);

  return Math.round(num * factor) / factor;
};

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
