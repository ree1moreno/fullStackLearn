// for (<variável>; <expressão>; <ação de controle>) {
//   <bloco de código>
// }

let spaceship = "Helmet";
let newSpaceship = "";

for (let index = 0; index < spaceship.length; index += 1) {
  if (spaceship[index] == "e") {
    newSpaceship += "i";
  } else {
    newSpaceship += spaceship[index];
  }
}

console.log(newSpaceship);
