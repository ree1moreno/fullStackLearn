// import moment from "moment/src/moment";

// alert(moment().format("HH:mm:ss"));

const Planet = require("./planet");
const solarSystem = require("./solar_system");
const moment = require("moment");

const earth = new Planet("Terra", 501000000);
earth.rotate();

solarSystem.planets.push(earth);
solarSystem.planets.push(new Planet("Marte", 144800000));
solarSystem.planets.push(new Planet("Mercúrio", 74800000));
solarSystem.planets.push(new Planet("Saturno", 427000000));

console.log(solarSystem);

console.log(moment().format("HH:mm:ss"));
