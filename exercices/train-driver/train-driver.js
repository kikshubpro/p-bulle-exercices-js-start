// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...ids) {
  return [...ids]
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  // [ids] = [ids].splice([ids].length - 1, 0, [ids].splice(0, 2)[0])
  // return [...ids]
  // var tmp = [ids][0] ; [ids][1]
  [ids] = [ids].slice(2), [ids].slice(0, 2)
  return [...ids]
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  [missingWagons].forEach(element => {
    [ids].push(element)
  });
  return [...ids]
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  throw new Error('Remove this line and implement the function');
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  throw new Error('Remove this line and implement the function');
}
