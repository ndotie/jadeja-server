const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Services = sequelize.define("services", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
});

module.exports = Services;
