let spaceship = {
  name: "Supernova",
  type: "Batalha",
  crew: ["Cap. Silva", "Ana Júlia", "Thiago"],
};

spaceship.crew.push("Ten. Fernanda");

console.log(spaceship);

let spaceships = [
  { name: "Elemental", crewQuantity: 10 },
  { name: "Colossus", crewQuantity: 8 },
  { name: "Helmet", crewQuantity: 15 },
];

console.log(spaceships[0].name); // nome do primeiro objeto - Elemental
console.log(spaceships[1].crewQuantity); // quantidade do segundo objeto - 8

spaceships.forEach((spaceship) => console.log(spaceship.name)); // todos os nomes

let newSpaceship = {
  name: "Golias",
  maxCrew: 20,
  captain: {
    name: "Hugo Trent",
    age: 37,
  },
};

console.log(newSpaceship.captain.name); // Hugo Trent
