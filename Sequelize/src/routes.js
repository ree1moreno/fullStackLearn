const express = require("express");
const routes = express.Router();

const PlanetController = require("../controllers/PlanetController");
const SatelliteController = require("../controllers/SatelliteController");
const CapController = require("../controllers/CapController");
const SpaceshipController = require("../controllers/SpaceshipController");

routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satellites", SatelliteController.store);
routes.get("/planet/:planetId/satellites", SatelliteController.index);

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/cap/:capId/spaceships", SpaceshipController.store);
routes.get("/cap/:capId/spaceships", SpaceshipController.index);

module.exports = routes;
