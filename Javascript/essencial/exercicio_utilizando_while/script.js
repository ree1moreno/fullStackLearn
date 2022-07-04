let spaceshipName = prompt("Bem vindo! Qual o nome da sua nave?");

let confirmChoice = prompt("Deseja entrar na dobra espacial?\n- Sim\n- Não");
let counter = 0;

while (confirmChoice.toLocaleLowerCase() == "sim") {
  counter += 1;
  confirmChoice = prompt("Deseja entrar na dobra espacial?\n1 - Sim\n2 - Não");
}

alert(`A nave ${spaceshipName} realizou a dobra espacial ${counter} vezes.`);
