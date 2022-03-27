// Implements Fisher–Yates shuffle
export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randI = Math.trunc(Math.random() * (i + 1));
    [arr[i], arr[randI]] = [arr[randI], arr[i]];
  }

  return arr;
}
