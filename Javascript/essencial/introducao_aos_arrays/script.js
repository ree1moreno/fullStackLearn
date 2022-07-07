/* Array é uma estrutura de dados
  - capaz de armazenar e organizar outros dados

Dados são organizados em forma de lista
  - cada valor fica numa determinada posição
 
Pode armazenar internamente qualquer outro tipo
  - number, string, boolean, etc
  - e até outro array 
*/

let hitchedSpaceships = ["Supernova", "Elemental", "Helmet"];

console.log(hitchedSpaceships);
console.log(hitchedSpaceships[0]); // Supernova

let spaceshipInfo = ["Colossus", 7, true];

console.log(spaceshipInfo[1]); // 7
console.log(spaceshipInfo[3]); // undefined

let otherSpaceships = new Array("Supernova", "Elemental", "Helmet");
let numbers = new Array(1, 2, 3, 4);
let number = new Array(5);

console.log(otherSpaceships);
console.log(numbers); // [ 1, 2, 3, 4 ]
console.log(number); // [ < 5 empty items > ]
// evitar new Array quando nao for um array preenchido
