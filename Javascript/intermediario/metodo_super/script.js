class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
    this.currentVelocity = 0;
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if (this.currentVelocity > this.maxRecommendedVelocity) {
      console.log(
        "VELOCIDADE MÁXIMA ULTRAPASSADA!!!\nDiminua ou poderá provocar danos à nave.",
      );
    }
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedVelocity);
    this.maxLoadWeight = maxLoadWeight;
  }

  speedUp(acceleration) {
    acceleration /= 2;
    console.log(`Incrementando velocidade em ${acceleration} km/s`);
    super.speedUp(acceleration);
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400);

console.log(transportSpaceship);

transportSpaceship.speedUp(210);

console.log(transportSpaceship);

class SpacialStation {
  constructor(name, size) {
    this.name = name;

    this.size = size;
  }
}

class ResourceProcessor {
  constructor(name, size) {
    super(name, size);
  }

  totalLoadProcessedInaWeek() {
    (this.size * 1.4) / 4;
  }
}

let resouceProcessor = new ResourceProcessor("Mineradora", 120000);

resouceProcessor.totalLoadProcessedInaWeek();
