const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

module.exports = {
  async store(req, res) {
    const { capId } = req.params;
    const { name, capacity } = req.body;

    const cap = await Cap.findByPk(capId);

    if (!cap) {
      res.send("Esse capitão não existe!");
    }

    const [spaceships] = await Spaceship.findOrCreate({
      where: { name, capacity },
    });

    await cap.addSpaceship(spaceships);
    return res.json(spaceships);
  },

  async index(req, res) {
    const { capId } = req.params;

    const cap = await Cap.findByPk(capId, {
      include: { association: "spaceships" },
    });

    return res.json(cap);
  },
};
