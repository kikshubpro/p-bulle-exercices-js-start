/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * @param {number} timeLeft
 * @return {string}
 */
export function cookingStatus(timeLeft) {
  if (timeLeft == 0) {
    return "Lasagna is done.";
  } else if (timeLeft == null) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

/**
 * @param {string[]} layers
 * @returns {object}
 */
export function quantities(layers) {
  var nbLayerNoodles = 0;
  var nbLayerSauce = 0;
  console.log(">>>>>>>>>>>>>>>");
  layers.forEach((layer) => {
    if (layer == "noodles") {
      nbLayerNoodles += 50;
    } else if (layer == "sauce") {
      nbLayerSauce += 0.2;
    }
  });

  return {
    noodles: nbLayerNoodles,
    sauce: nbLayerSauce,
  };
}

/**
 * @param {number[]} layers
 * @param {number} avgPrepTime
 * @return {number}
 */
export function preparationTime(layers, avgPrepTime) {
  if (avgPrepTime == null) {
    avgPrepTime = 2;
  }

  return layers.length * avgPrepTime;
}

/**
 * @param {number[]} friendsList
 * @param {number[]} myList
 *
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}
