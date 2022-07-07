/* 

Splice:

  Significa emendar ou costurar
  - substitui o array original

*/

let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"];

console.log("antes", spaceshipNames);

let removedSpaceship = spaceshipNames.splice(
  1,
  2,
  "Deméter",
  "Puller",
  "Golias",
);
// vai remover o que está na posição 1 e 2 e vai adicionar os 3 novos elementos no lugar deles

console.log("depois", spaceshipNames);
console.log("removidas", removedSpaceship);

/* 

Slice:

  Significa fatiar ou dividir
  - extrai uma parte do array sem alterar o array original

*/

let extractedNames = spaceshipNames.slice(1, 3);

console.log("depois do slice", spaceshipNames); // manteve o original
console.log("depois do slice", extractedNames); // novo array
