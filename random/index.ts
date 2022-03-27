import { createAliasFunction } from "../helpers";

export const randomInt = (from: number, to: number) =>
  Math.floor(Math.random() * (to - from + 1)) + from;

export const flipCoin = createAliasFunction(randomInt, 0, 1);

// Fisher–Yates Shuffle
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export const shuffle = <T>(arr: T[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const randI = Math.trunc(Math.random() * (i + 1));

    [arr[i], arr[randI]] = [arr[randI], arr[i]];
  }

  return arr;
};

// Fisher-Yates Shuffle Inside Out
export const shuffleCopy = <T>(arr: T[]) => {
  const res = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const randI = Math.trunc(Math.random() * (i + 1));

    if (randI !== i) {
      res[i] = res[randI];
    }
    res[randI] = arr[i];
  }

  return res;
};

export const randomString = (strLength: number) =>
  Math.random().toString(16).substring(2, strLength);

// export function Alea(seed) {
//   if (seed === undefined) seed = +new Date() + Math.random();
//   function Mash() {
//     var n = 4022871197;
//     return function (r) {
//       for (var t, s, u = 0, e = 0.02519603282416938; u < r.length; u++)
//         (s = r.charCodeAt(u)),
//           (f = e * (n += s) - ((n * e) | 0)),
//           (n = 4294967296 * ((t = f * ((e * n) | 0)) - (t | 0)) + (t | 0));
//       return (n | 0) * 2.3283064365386963e-10;
//     };
//   }
//   return (function () {
//     let m = Mash(),
//       a = m(" "),
//       b = m(" "),
//       c = m(" "),
//       x = 1,
//       y;

//     (seed = seed.toString()), (a -= m(seed)), (b -= m(seed)), (c -= m(seed));
//     a < 0 && a++, b < 0 && b++, c < 0 && c++;
//     return function () {
//       var y = x * 2.3283064365386963e-10 + a * 2091639;
//       (a = b), (b = c);
//       return (c = y - (x = y | 0));
//     };
//   })();
// }
