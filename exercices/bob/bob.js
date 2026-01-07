//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.replace(/\s/g, "") == "") {
    return "Fine. Be that way!"
  } else if (message.endsWith("?") && /[a-zA-Z]/g.test(message) && message.replace(/[0-9]/g, "") == message.replace(/[0-9]/g, "").toUpperCase()) {
    return "Calm down, I know what I'm doing!"
  } else if (message.replace(/\s/g, "").endsWith("?")) {
    return "Sure."
  } else if (/[a-zA-Z]/g.test(message) && message.replace(/[0-9]/g, "") == message.replace(/[0-9]/g, "").toUpperCase()) {
    return "Whoa, chill out!"
  } else {
    return "Whatever."
  }
};
