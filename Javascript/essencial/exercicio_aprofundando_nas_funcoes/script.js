alert(
  `Atenção! Estamos a chegando ao destino, vamos começar a desacelerar para o pouso.`,
);

const speedDown = (velocity, deceleration, printer) => {
  while (velocity > 0) {
    printer(velocity);
    velocity -= deceleration;
  }
  alert(`Nave parada, as comportas já podem ser abertas.`);
};

const printer = (velocity) => alert(`Velocidate atual da nave: ${velocity}`);

speedDown(150, 20, printer);
