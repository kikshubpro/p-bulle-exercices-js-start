// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  var nb1 = "";
  var nb2 = "";

  array1.forEach((nb) => {
    nb1 += nb;
  });

  array2.forEach((nb) => {
    nb2 += nb;
  });

  return parseInt(nb1) + parseInt(nb2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let x = value.toString();
  let isPalindrome = true;

  for (let i = 0; i < Math.ceil(x.length / 2); i++) {
    if (x[i] != x[x.length - (1 + i)]) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === "" || input === null || input === undefined) {
    return "Required field";
  } else if (!Number(input)) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
