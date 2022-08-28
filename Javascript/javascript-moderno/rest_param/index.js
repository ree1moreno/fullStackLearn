function greetCrew(message, name) {
  console.log(`${message}, ${name}!`);
}

greetCrew("Seja bem-vindo", "Artur");

function greetAllCrew(message, names) {
  names.forEach((name) => console.log(`${message}, ${name}!`));
}

greetAllCrew("Seja bem-vindo", ["Artur", "Jake", "Melissa"]);

function greetAllCrew2(message, ...names) {
  names.forEach((name) => console.log(`${message}, ${name}!`));
}

greetAllCrew2("Seja bem-vindo", "Artur", "Jake", "Melissa");
