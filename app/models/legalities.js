const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Legalities = sequelize.define("Legalities", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  value: Sequelize.STRING,
});

module.exports = Legalities;
