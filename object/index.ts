export function deepFreeze(obj: Record<any, any>): Record<any, any> {
  // If obj is not an object or array, or is already frozen, return it
  if (
    typeof obj !== "object" ||
    obj === null ||
    obj instanceof Date ||
    Object.isFrozen(obj)
  ) {
    return obj;
  }

  // Freeze obj and its children recursively
  Object.freeze(obj);
  Object.values(obj).forEach(deepFreeze);

  return obj;
}
