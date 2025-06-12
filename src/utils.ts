export const selectRandom = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const debounce = (fn: Function, ms: number) => {
  let timer: number | null;
  return () => {
    clearTimeout(timer as number);
    timer = setTimeout(function () {
      timer = null;
      fn.apply({}, arguments);
    }, ms);
  };
};

/**
 * Clamps an input between min and max.
 * @param v the input to clamp and return
 * @param max The maximum value an input can take
 * @param min The minimum value an input can take. If not supplied, evaluated as -1 * max
 * @returns the input if it is within bounds, otherwise min or max as necessary
 */
export const clamp = (v: number, max: number, min?: number): number => {
  return Math.max(min ?? -1 * max, Math.min(max, v));
};
