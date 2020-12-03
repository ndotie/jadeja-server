const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const WeDo = sequelize.define("what_we_do", {
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
  readmore: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = WeDo;
