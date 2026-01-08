//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fn) => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
};

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;

    if (promises === undefined) {
      resolve(undefined)
      return
    }

    if (promises.length == 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then(value => {
          results[i] = value;
          count++;

          if (count == promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};

export const allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;

    if (promises == undefined) {
      resolve(undefined)
      return
    }

    if (!Array.isArray(promises) || promises.length == 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then(value => {
          results[i] = value;
        })
        .catch(reason => {
          results[i] = reason;
        })
        .finally(() => {
          count++;

          if (count == promises.length) {
            resolve(results);
          }
        });
    });
  });
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {

    if (promises === undefined) {
      resolve(undefined)
      return
    }

    if (promises.length == 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {

    if (promises === undefined) {
      resolve(undefined)
      return
    }

    if (promises.length == 0) {
      resolve([]);
      return;
    }

    let errors = []

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value);
        })
        .catch(error => {
          errors.push(error);

          if (errors.length == promises.length) {
            reject(errors)
          }
        });
    });
  });
};