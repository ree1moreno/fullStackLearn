(async () => {
  const Planet = require("./models/Planet");

  /*
  const newPlanet = await Planet.create({
    name: "Vênus",
    position: 5,
  });


  // const seePlanets = await Planet.findAll();
  // const seePlanets = await Planet.findByPk(2);
  const seePlanets = await Planet.findAll({
    where: {
      name: "Terra",
    },
  });
  */
  const updatePlanets = await Planet.findByPk(2);
  updatePlanets.position = 2;
  await updatePlanets.save();

  console.log(updatePlanets);
})();
