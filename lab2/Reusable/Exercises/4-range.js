"use strict";

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
  const length = end - start;
  if (length < 0) {
    return [];
  }
  const array = new Array(length);
  let i = 0;
  for (let n = start; n <= end; n++) {
    array[i++] = n;
  }
  return array;
};

module.exports = { range };
