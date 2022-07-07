let isSpaceshipFlying = true;
let boardMenu;

let spaceshipName = prompt("Bem vindo! Qual o nome da sua nave?");

let type = prompt("Qual o tipo da sua nave?");

let maxVelocity = prompt("Qual a velocidade máxima da sua nave?");

let spaceship = {
  velocity: 0,
  speedUp: function () {
    let acceleration = Number(prompt("Quanto deseja acelerar?"));
    if (acceleration + this.velocity <= this.maxVelocity) {
      this.velocity += acceleration;
    } else {
      alert(`
    Velocidade atual da nave: ${this.velocity} km/s.
    Velocidade máxima permitida: ${this.maxVelocity} km/s.
    Você ainda pode acelerar: ${this.maxVelocity - this.velocity} km/s.  
      `);
    }
  },
  speedDown: function () {
    alert(`
  Você está parando!!
  Nome: ${this.spaceshipName}.
  Tipo: ${this.type}.
  Velocidade: ${this.velocity} km/s.
    `);
  },
};

spaceship.spaceshipName = spaceshipName;
spaceship.type = type;
spaceship.maxVelocity = maxVelocity;

function showMenu() {
  boardMenu = prompt(`
Você deseja acelerar ou parar a nave?
1 - Acelerar.
2 - Parar.
`);
}

showMenu();

while (isSpaceshipFlying) {
  switch (boardMenu) {
    case "1":
      spaceship.speedUp();
      alert(`Estamos a uma velodade de: ${spaceship.velocity} km/s`);
      showMenu();
      break;
    case "2":
      spaceship.speedDown();
      isSpaceshipFlying = false;
      break;
    default:
      alert(`Ação inválida`);
      showMenu();
      break;
  }
}
