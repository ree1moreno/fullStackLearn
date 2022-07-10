class Spaceship {}

let mySpaceship = new Spaceship();

console.log(mySpaceship); // Spaceship {}

class SpacialStation {
  constructor(name, platformsQuantity) {
    this.name = name;
    this.platformsQuantity = platformsQuantity;
  }
}

let observatory = new SpacialStation("Observatório", 40);

console.log(observatory); // SpacialStation { name: 'Observatório', platformsQuantity: 40 }
console.log(observatory.name); // Observatório

class Nave {
  constructor(name, type = "Descoberta") {
    this.name = name;
    this.type = type;
  }
}

let darwin = new Nave("Darwin");
let helmet = new Nave("Helmet", "Batalha");

console.log(darwin); // Nave { name: 'Darwin', type: 'Descoberta' }
console.log(helmet); // Nave { name: 'Helmet', type: 'Batalha' }
