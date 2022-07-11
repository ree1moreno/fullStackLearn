class Captain {
  constructor(name, age, flightHours) {
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}

class Spaceship {
  constructor(
    name,
    crewQuantity,
    capitainName,
    captainAge,
    captainFlightHours,
  ) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.captain = new Captain(capitainName, captainAge, captainFlightHours);
  }
}

let spaceship = new Spaceship("Ártemis", 13, "Will Grey", 45, 15000);

console.log(spaceship);
