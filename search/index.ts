export function binarySearch<T>(arr: T[], target: T) {
  let mid = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    mid = left + Math.trunc((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return undefined;
}
