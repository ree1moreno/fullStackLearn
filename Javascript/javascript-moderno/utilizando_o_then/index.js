let komodoShip = {
  name: "Komodo",
  velocity: 80,
  acceleration: 10,
};

const velocityAfter2Seconds = (velocity, acceleration) => {
  return new Promise((resolve, reject) => {
    if (acceleration > 0) {
      velocity += acceleration * 2;
      console.log(`Nova velocidade: ${velocity} km/s`);
      resolve(velocity);
    } else {
      console.log("Aceleração inválida!");
      reject("Não possui aceleração");
    }
  });
};

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(
  (velocity) => {
    komodoShip.velocity = velocity;
    console.log("Depois de acelerar:\n", komodoShip);
  },
);

console.log("Execução de Promises");
console.log(komodoShip);
