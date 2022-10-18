let komodoShip = {
  name: "Komodo",
  velocity: 80,
  acceleration: 0,
};

const velocityAfter2Seconds = (velocity, acceleration) => {
  return new Promise((resolve, reject) => {
    if (acceleration > 0) {
      velocity += acceleration * 2;
      console.log(`Nova velocidade: ${velocity}`);
      resolve(velocity);
    } else {
      console.log(`Aceleração inválida!`);
      reject(`Não possui aceleração`);
    }
  });
};

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)
  .then((velocity) => {
    komodoShip.velocity = velocity;
    console.log(`Depois de acelerar:`, komodoShip);
  })
  .catch((message) => console.log(`Komodo: ${message}`));

console.log(`Execução de Promises`);
console.log(`Antes de acelerar: `, komodoShip);
