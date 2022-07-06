function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration;
  console.log(`Nova velocidade: ${newVelocity}`);
}

speedUp(60, 10);

speedUp(40, 20);

speedUp(70, 5);

function greetPilot(name, message = "Olá") {
  console.log(`${message} ${name}.`);
}

greetPilot("John Mars", "Seja bem-vindo");
greetPilot("John Mars");
