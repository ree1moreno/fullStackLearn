const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Spaceship = sequelize.define("spaceships", {
  name: DataTypes.STRING,
  capacity: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = Spaceship;
