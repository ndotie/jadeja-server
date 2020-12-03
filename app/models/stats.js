const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Stats = sequelize.define("stats", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  icon: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  countings: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Stats;
