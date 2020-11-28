const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Slides = sequelize.define("slides", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  slide_no: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  brief: Sequelize.TEXT,
});

module.exports = Slides;
