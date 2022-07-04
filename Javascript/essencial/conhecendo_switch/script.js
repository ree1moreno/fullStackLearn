let velocity = 80;

switch (velocity * 2) {
  case 100:
    console.log("Sua velocidade é 100 km/s.");
    break;
  case 160:
    console.log("Sua velocidade é 160 km/s.");
    break;
  default:
    console.log("Velocidade não identificada.");
}

let spaceship = "Elemental";

switch (spaceship) {
  case "Golias":
    console.log("Nave mais resistente");
    break;
  case "Raptor":
    console.log("Nave mais rápida");
    break;
  case "Enterprise":
    console.log("Nave da frota estelar");
    break;
  default:
    console.log("Nave comum");
}
