let spaceshipName = prompt("Bem vindo! Qual é o nome da sua nave?");

let newSpaceshipName = "";
let bannedChar = "e";

for (let index = spaceshipName.length - 1; index >= 0; index -= 1) {
  if (spaceshipName[index] == bannedChar) break;
  newSpaceshipName += spaceshipName[index];
}

alert(`O nome da nave agora é ${newSpaceshipName}.`);
