let isProgramOn = true;
let velocity = 0;
let acceleration = 5;
let newVelocity = velocity;
let boardMenu;

let pilotName = prompt("Olá piloto, qual o seu nome?").toUpperCase();

let spaceshipName = prompt("Qual o nome da sua nave?").toUpperCase();

alert(
  `Bem-vindo ao programa de bordo ${pilotName}.\nSua nave está parada, vamos começar nossa viagem!`,
);

function showMenu() {
  boardMenu = prompt(
    `${pilotName}, aqui está o seu menu de bordo.
    Escolha uma das opções a seguir pelo seu número para realizar uma ação:
    1 - Acelerar a nave em 5 km/s.
    2 - Desacelerar a nave em 5 km/s.
    3 - Imprimir os dados de bordo.
    4 - Sair do programa.`,
  );
}
showMenu();

function speedUp(velocity, acceleration) {
  return (velocity += acceleration);
}

function speedDown(velocity, acceleration) {
  return (velocity -= acceleration);
}

while (isProgramOn) {
  switch (boardMenu) {
    case "1":
      newVelocity += speedUp(velocity, acceleration);
      alert(`Estamos acelerando. ${spaceshipName} está a ${newVelocity} km/s.`);
      showMenu();
      break;
    case "2":
      newVelocity += speedDown(velocity, acceleration);
      if (newVelocity < 0) {
        newVelocity = 0;
        alert("Você já está parado, não pode desacelerar.");
      } else {
        alert(
          `Estamos desacelerando. ${spaceshipName} está a ${newVelocity} km/s.`,
        );
      }
      showMenu();
      break;
    case "3":
      alert(`
  Nome da nave: ${spaceshipName}.
  Velocidade atual: ${newVelocity} km/s.
  `);
      showMenu();
      break;
    case "4":
      isProgramOn = false;
      alert("Programa finalizado.");
      break;

    default:
      showMenu();
  }
}
