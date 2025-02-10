// Creates an immutable string enum with an optional prefix
export const createEnum = <T extends string>(
  array: T[],
  prefix = ""
): { [K in T]: K } =>
  Object.freeze(
    array.reduce((obj, item) => {
      obj[item] = `${prefix}${
        prefix ? item[0].toUpperCase() + item.slice(1) : item
      }`;

      return obj;
    }, Object.create(null))
  );
