export const round = (num, places = 2) => {
  const exp = 10 ** places;
  return Math.round((num + Number.EPSILON) * exp) / exp;
};

export const debounce = <T extends (...args: any[]) => void>(func: T, wait = 200): T => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  } as T;
};
