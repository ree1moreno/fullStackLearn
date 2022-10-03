function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2, 2));
console.log(sum(32, 5, 74, 7, 1, 9, 90));
