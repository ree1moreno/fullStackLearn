class Spaceship {
  constructor(name) {
    this.name = name;
    this.velocity = 0;
  }

  speedUp(acceleration) {
    this.velocity += acceleration;
  }
}

let artemis = new Spaceship("Artemis");

console.log(artemis); // Spaceship { name: 'Artemis', velocity: 0 }

artemis.speedUp(10);
artemis.speedUp(15);

console.log(artemis); // Spaceship { name: 'Artemis', velocity: 25 }
