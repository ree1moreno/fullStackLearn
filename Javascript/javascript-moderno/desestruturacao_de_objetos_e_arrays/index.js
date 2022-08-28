let spaceship = {
  name: "Colossus",
  crewQuantity: 10,
  isHitched: false,
};

// let spaceshipName = spaceship.name;
// let crewQuantity = spaceship.crewQuantity;
// let { name: spaceshipName, crewQuantity: crewQuantity } = spaceship;
let { name: spaceshipName, crewQuantity } = spaceship;

console.log(spaceshipName, crewQuantity);

let spaceships = ["Colossus", "Ártemis", "Fênix"];

let [colossus, artemis, fenix, puller] = spaceships;
// let colossus = spaceships[0];
// let artemis = spaceships[1];

console.log(colossus, artemis, fenix, puller);

function printSpaceships([colossus, artemis, fenix]) {
  console.log(colossus, artemis, fenix);
}

printSpaceships(spaceships);
