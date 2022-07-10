let spaceshipsArray = [];
let isProgramOn = true;
let menu;
let printedNames;

class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.isHitched = false;
    this.doorStatus = false;
  }

  hitchSpaceship() {
    this.isHitched = true;
    this.doorStatus = true;
  }
}

function showMenu() {
  menu = prompt(`O que deseja fazer?
1 - Realizar engate.
2 - Imprimir as naves.
3 - Sair do programa.
  `);
}

function registerSpaceship() {
  let spaceshipName = prompt("Qual o nome da sua nave?");
  let spaceshipCrew = prompt("Qual o número de tripulantes?");
  let newSpaceship = new Spaceship(spaceshipName, spaceshipCrew);
  newSpaceship.hitchSpaceship();
  spaceshipsArray.push(newSpaceship);
  alert(`A nave ${newSpaceship.name} foi engatada.`);
}

function printNames(array) {
  if (!array.length) {
    alert("Nenhuma nave na estação.");
  } else {
    printedNames = array.map((spaceship) => spaceship.name).join(", ");
    alert(`As naves da estação são: ${printedNames}`);
  }
}

alert("Bem-vindo a Estação Espacial.");
showMenu();

while (isProgramOn) {
  switch (menu) {
    case "1":
      registerSpaceship();
      showMenu();
      break;
    case "2":
      printNames(spaceshipsArray);
      showMenu();
      break;
    case "3":
      isProgramOn = false;
      alert("Programa encerrado.");
      break;

    default:
      alert("Opção inválida! Escolha novamente.");
      showMenu();
  }
}
