const mediaSimples = (...numbers) =>
  numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

console.log(mediaSimples(2, 6, 3, 7, 4));

const mediaPonderada = (...obj) => {
  return (
    obj.reduce((acc, { num, peso }) => acc + num * (peso ?? 1), 0) /
    obj.reduce((acc, { peso }) => acc + (peso ?? 1), 0)
  );
};

console.log(
  mediaPonderada({ num: 7, peso: 2 }, { num: 9, peso: 5 }, { num: 3 }),
);

// considerando uma sequencia ordenada
const mediana = (...numbers) => {
  if (numbers.length % 2 !== 0) {
    return numbers[numbers.length / 2 - 0.5];
  }
  return (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
};

console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(15, 14, 8, 7, 3));

// considerando uma sequencia desordenada
const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return (firstMedian + secondMedian) / 2;
};

console.log(median(2, 5, 99, 4, 42, 7));
console.log(median(3, 14, 7, 15, 8));

const moda = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
