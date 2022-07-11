/* 

  Permite que as classes herdem características de outras classes
    - ou seja, declaramos uma classe que vai herdar métodos e atributos de outra classe

  É uma técnica de reuso de código

  As duas classes devem ter uma relação de "é um"
    - por exemplo: Todo capitão é uma pessoa
    - poderia ter uma classe Captain herdando de Person

*/

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

class BattleSpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log("Recolhendo armas e parando nave de batalha.");
  }
}

class DiscoverySpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log(
      "Recolhendo equipamento de amostras e parando nave de descoberta.",
    );
  }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200);
let fenix = new BattleSpaceship("Fenix", 8, 240);

console.log(darwin);
console.log(fenix);

darwin.speedUp(210);
fenix.speedUp(230);

console.log(darwin); // VELOCIDADE MÁXIMA ULTRAPASSADA!!! Diminua ou poderá provocar danos à nave.

console.log(fenix); // sem aviso, velocidade aceita

darwin.stop();
fenix.stop();

console.log(darwin); // Recolhendo equipamento de amostras e parando nave de descoberta.
console.log(fenix); // Recolhendo armas e parando nave de batalha.
