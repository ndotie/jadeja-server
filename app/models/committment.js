const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Committment = sequelize.define("committment", {
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
  brief: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Committment;
