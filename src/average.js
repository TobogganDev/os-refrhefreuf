/**
 * Calculates the average of a series of numbers.
 *
 * @param {number[]} tab An array of numbers.
 * @returns {number} The average of the numbers in the array.
 */
export default function average(tab) {
  if (!Array.isArray(tab) || !tab.every(Number.isFinite)) {
    return NaN;
  }

  const sum = tab.reduce((a, b) => a + b, 0);
  return sum / tab.length;
}