console.log(speedUp(60, 10));
console.log(doubleSpeed(50)); // nao funciona

let doubleSpeed = function (velocity) {
  return velocity * 2;
};

function speedUp(velocity, acceleration) {
  return velocity + acceleration;
}
