import { clamp } from "../number";

export function getPercentage(
  value: number,
  start: number,
  end: number,
  clamped = true
) {
  const percentage = (value - start) / (end - start);
  return clamped ? clamp(percentage, 0, 1) : percentage;
}

export function getBandedPercentage(
  percentage: number,
  oneStart: number,
  oneEnd: number
) {
  return percentage < oneStart
    ? getPercentage(percentage, 0, oneStart)
    : getPercentage(percentage, 1, oneEnd);
}
