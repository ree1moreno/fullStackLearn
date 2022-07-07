// Funções de iteração em arrays são HOFs - enviamos callbacks que funcionam como parâmetros

let hitchedSpaceships = ["Demétre", "Darwin", "Supernova", "Fenix", "Puller"];

hitchedSpaceships.forEach((currentSpaceship, index) => {
  console.log(`
  Nave: ${currentSpaceship}.
  Índice: ${index}.
  `);
});

let upcasedSpaceships = hitchedSpaceships.map((currentSpaceship) => {
  let upcased = currentSpaceship.toLocaleUpperCase();
  return upcased;
});

console.log(upcasedSpaceships);

let filterWith7Chars = hitchedSpaceships.filter((element) => {
  return element.length >= 7;
});

console.log(filterWith7Chars);

let findWith7Chars = hitchedSpaceships.find((element) => {
  return element.length >= 7;
});

console.log(findWith7Chars);
