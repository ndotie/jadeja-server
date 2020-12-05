const Sequelize = require("sequelize");

//connection
const sequelize = require("./db");

const Terms = sequelize.define("Terms", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  term: Sequelize.TEXT,
  registration: Sequelize.TEXT,
});

module.exports = Terms;
