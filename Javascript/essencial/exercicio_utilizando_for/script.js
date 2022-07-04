let spaceshipName = prompt("Bem vindo! Qual o nome da sua nave?");

let letterToHide = prompt("Qual letra você deseja substituir?");

let letterToShow = prompt("Qual letra você quer que seja mostrada no lugar?");

let newSpaceshipName = "";

for (let index = 0; index < spaceshipName.length; index += 1) {
  if (spaceshipName[index] == letterToHide) {
    newSpaceshipName += letterToShow;
  } else {
    newSpaceshipName += spaceshipName[index];
  }
}

alert(`A nave agora se chama ${newSpaceshipName}`);
