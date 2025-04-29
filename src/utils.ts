import { useEffect, useState } from "react";

export const selectRandom = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const useWindowDimension = () => {
  const [dimension, setDimension] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setDimension([window.innerWidth, window.innerHeight]);
    }, 300);
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);
  return dimension;
};

function debounce(fn: Function, ms: number) {
  let timer: number | null;
  return () => {
    clearTimeout(timer as number);
    timer = setTimeout(function () {
      timer = null;
      fn.apply({}, arguments);
    }, ms);
  };
}
