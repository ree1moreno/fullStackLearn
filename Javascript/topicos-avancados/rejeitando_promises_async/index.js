async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject(`arguments must be of type number.`);
  }
  return a + b;
}

async function asyncSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject(`arguments must be of type number.`);
  }
  return a - b;
}

const sumResult = asyncSum(50, 33);
const subractResult = asyncSubtract(50, 33);

Promise.all([sumResult, subractResult])
  .then((results) => console.log(results))
  .catch((err) => console.log(err));
