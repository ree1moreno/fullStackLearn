const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

let filteredSpaceships = hitchedSpaceships
  .filter((spaceship) => spaceship[1] > 9)
  .map((spaceship) => spaceship[0]);

let platform = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false;
});

let upperCasedSpaceships = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toLocaleUpperCase();
});

alert(`
Naves com menos de 9 tripulantes: ${filteredSpaceships.join(", ")}.
Primeira plataforma com engate pendente: ${platform + 1}.
Naves: ${upperCasedSpaceships.join(", ")}
`);
