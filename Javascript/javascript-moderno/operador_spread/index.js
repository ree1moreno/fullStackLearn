let spaceships = ["Colossus", "Ártemis", "Fenix"];

console.log(spaceships);
console.log(...spaceships);

let newSpaceships = [...spaceships, "Puller"];
console.log(newSpaceships);

function speedUp(velocity, acceleration) {
  return velocity + acceleration;
}

let spaceshipsAcceleration = [60, 10];

let newVelocity = speedUp(...spaceshipsAcceleration);

console.log(newVelocity);
