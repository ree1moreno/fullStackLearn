const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Planet = sequelize.define("planets", {
  name: DataTypes.STRING,
  position: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = Planet;
