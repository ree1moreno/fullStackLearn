let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"];

console.log("antes", hitchedSpaceships);

hitchedSpaceships.push("Supernova");

console.log("após push", hitchedSpaceships);

hitchedSpaceships.pop();

console.log("após pop", hitchedSpaceships);

let removedSpaceship = hitchedSpaceships.shift();

console.log("após shift", hitchedSpaceships);
console.log("nave removida:", removedSpaceship);

hitchedSpaceships.unshift("Phoenix");

console.log("após unshift", hitchedSpaceships);

console.log("tamanho do array:", hitchedSpaceships.length);

let elementalPos = hitchedSpaceships.indexOf("Elemental");
let goliasPos = hitchedSpaceships.indexOf("Golias");

console.log("a posição é:", elementalPos);
console.log("a posição é:", goliasPos); // quando não encontra a resposta é -1
