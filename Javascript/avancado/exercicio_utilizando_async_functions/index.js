const Spaceship = require("./spaceship.js");
const SpaceshipEngine = require("./spaceship_engine.js");

const sophia = new Spaceship("Sophia", 10, 5, 70);
const amsterda = new Spaceship("Amsterdã", 14, 10, 40);
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4, 80);
const sophiaEngine = new SpaceshipEngine(sophia);
const amsterdaEngine = new SpaceshipEngine(amsterda);
const dwarfStartEngine = new SpaceshipEngine(dwarfStart);
sophiaEngine.turnOn();
amsterdaEngine.turnOn();
dwarfStartEngine.turnOn();
console.log("Promises");
