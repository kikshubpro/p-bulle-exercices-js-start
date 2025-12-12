// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let nbCard = 0;
  stack.forEach((cardOfStack) => {
    if (cardOfStack == card) {
      nbCard++;
    }
  });

  return nbCard;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let nbCard = 0;

  if (type) {
    stack.forEach((cardOfStack) => {
      if (cardOfStack % 2 == 0) {
        nbCard++;
      }
    });

    return nbCard;
  } else {
    stack.forEach((cardOfStack) => {
      if (cardOfStack % 2 == 1) {
        nbCard++;
      }
    });

    return nbCard;
  }
}
