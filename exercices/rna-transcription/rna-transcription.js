//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (adn) => {
  let result = ""

  for (let nucleotide of adn) {
    switch (nucleotide) {
      case "G":
        result += "C"
        continue
      case "C":
        result += "G"
        continue
      case "T":
        result += "A"
        continue
      case "A":
        result += "U"
        continue
    }
  }

  return result
};
