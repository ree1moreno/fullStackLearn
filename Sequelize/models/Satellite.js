const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Satellite = sequelize.define("satellites", {
  name: DataTypes.STRING,
  serial_number: DataTypes.INTEGER,
  planetId: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = Satellite;
