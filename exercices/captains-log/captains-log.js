// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  var number = (Math.random() * 9999) + 1000
  return "NCC-" + number
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000.0 - 41000.0) + 41000.0
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetsType = "DHJKLMNRTY"
  return planetsType.charAt(Math.floor(Math.random() * planetsType.length))
}