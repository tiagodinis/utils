export function findLastIndex(array, condition) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (condition(array[i])) {
      return i;
    }
  }

  return -1;
}

export const getMappedValue = (cursor, ranges, ease = (cursor) => cursor) => {
  cursor = clamp(
    cursor,
    ranges[ranges.length - 1].input[0],
    ranges[0].input[1] - 1
  );

  const found = findLastIndex(
    ranges,
    ({ input: [min, max] }) => cursor >= min && cursor < max
  );

  // const found = ranges.findLastIndex(
  //   ({ input: [min, max] }) => cursor >= min && cursor < max
  // );
  const percentage = getPercentage(cursor, ...ranges[found].input);

  return lerp(ease(percentage), ...ranges[found].output);
};
