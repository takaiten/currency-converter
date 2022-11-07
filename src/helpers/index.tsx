export const round = (num, places = 2) => {
  const exp = 10 ** places;
  return Math.round((num + Number.EPSILON) * exp) / exp;
};
