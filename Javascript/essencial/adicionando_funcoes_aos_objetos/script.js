let spaceship = {
  name: "Deméter",
  type: "Extração",
  maxCrew: 20,
  turnOn: function () {
    console.log("Preparando propulsão");
    console.log("Ligando computador de bordo");
  },
};

spaceship.velocity = 0;
spaceship.speedUp = function (acceleration) {
  this.velocity += acceleration;
};

spaceship.turnOn();
console.log("antes", spaceship);

spaceship.speedUp(10);

console.log("depois", spaceship);
