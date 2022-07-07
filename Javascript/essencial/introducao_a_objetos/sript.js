/* 
  Assim como os arrays, também são estruturas de dados
    - capazes de armazenar e organizar outros dados

  Dados são organizados através de propriedades

  Associação de chave-valor
    - chave é o nome da propriedade
    - valor é o valor que esta propriedade vai receber

  Também podem armazenar internamente qualquer outro tipo
    - inclusive arrays e outros objetos

*/

let spaceship = {
  name: "Fenix",
  crewQuantity: 7,
  type: "Battle",
};

console.log(spaceship);
console.log("nome:", spaceship.name);
console.log("tipo:", spaceship["type"]);

spaceship["isHitched"] = false;
spaceship.shieldLevel = 100;

console.log(spaceship);

let pilotInfo = new Object();

let spacialStation = {
  name: "Fox",
  platformsQuantity: 10,
  "new name": "Estelar", // estilo não recomendado
  true: false,
  2: "Descoberta", // estilo não recomendado
};

console.log(spacialStation["2"]);
console.log(spacialStation["new name"]);
