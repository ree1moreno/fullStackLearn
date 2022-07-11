class TransportSpaceship {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }

  set velocity(newVelocity) {
    if (newVelocity > 120) {
      this.currentVelocity = 120;
    } else {
      this.currentVelocity = newVelocity;
    }
  }
}

let spaceship = new TransportSpaceship("Transportador");

spaceship.velocity = 130;

console.log(spaceship);

class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad) {
    this.name = name;
    this.monthlyProcessedLoad = monthlyProcessedLoad;
  }

  get weeklyProcessedLoad() {
    return this.monthlyProcessedLoad / 4;
  }
}

let spaceship2 = new ResourceProcessStation("Gaia", 500);

console.log(spaceship2.weeklyProcessedLoad); // 125

spaceship2.monthlyProcessedLoad = 600;

console.log(spaceship2.weeklyProcessedLoad); // 150
