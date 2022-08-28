// import moment from "moment/src/moment";

// alert(moment().format("HH:mm:ss"));

const Planet = require("./planet");
const solarSystem = require("./solar_system");
const moment = require("moment");

import Spaceship from "./spaceship";
import armamentKind from "./armaments";
import { laserDefenses, steelDefenses } from "./defenses";
import basicDefenses from "./defenses";

const earth = new Planet("Terra", 501000000);
earth.rotate();

solarSystem.planets.push(earth);
solarSystem.planets.push(new Planet("Marte", 144800000));
solarSystem.planets.push(new Planet("Mercúrio", 74800000));
solarSystem.planets.push(new Planet("Saturno", 427000000));

console.log(solarSystem);

console.log(moment().format("HH:mm:ss"));

const spaceship = new Spaceship(
  "USS Enterprise",
  "James Tiberius Kirk",
  armamentKind.laser,
  laserDefenses,
);

const basicSpaceship = new Spaceship(
  "Nave Básica",
  "Astronauta Zin",
  [],
  basicDefenses,
);

console.log(spaceship);
console.log(basicSpaceship);
