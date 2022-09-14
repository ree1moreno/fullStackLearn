const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Cap = sequelize.define("caps", {
  name: DataTypes.STRING,
  registerNumber: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = Cap;
