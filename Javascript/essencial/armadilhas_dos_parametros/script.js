function greetPilot(name, message = "Olá") {
  console.log(`${message} ${name}.`);
}

greetPilot("John Mars", "Seja bem-vindo");
greetPilot(); // "Olá undefined"

function speedUp(velocity, unit = "km/s", acceleration) {
  let newVelocity = velocity + acceleration;
  console.log(`Nova velocidade: ${newVelocity} ${unit}.`);
}

speedUp(50, "m/s", 20); // "Nova velocidade: 70 m/s."
speedUp(50, 20); // "Nova velocidade: NaN 20."
speedUp(50, undefined, 20); // Nova velocidade: 70 m/s."

// importante sempre colocar um parametro com valor padrão no final, para não ocorrer de atribuir na variável errada
