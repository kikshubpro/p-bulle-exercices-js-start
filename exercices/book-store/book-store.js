//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const count = [0, 0, 0, 0, 0]

  books.forEach(book => {
    count[book - 1]++
  });

  const groups = []

  while (count.some(c => c > 0)) {
    let groupSize = 0

    for (let i = 0; i < 5; i++) {
      if (count[i] > 0) {
        count[i]--
        groupSize++
      }
    }

    groups.push(groupSize)
  }

  while (groups.includes(3) && groups.includes(5)) {
    groups.splice(groups.indexOf(5), 1)
    groups.splice(groups.indexOf(3), 1)

    groups.push(4, 4)
  }

  let totalCost = 0

  const discounts = {
    1 : 0,
    2 : 0.05,
    3 : 0.1,
    4 : 0.2,
    5 : 0.25
  }

  groups.forEach(group => {
    totalCost += 800 * group * (1 - discounts[group])
  });

  return totalCost
};