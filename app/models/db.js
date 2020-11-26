const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const database = new Sequelize(
  "jadejadb", //db name
  "dbmasteruser", //database user
  "nVd[|[rb,gb8B#X`k{*#$n2[KUDPlwDI", //password
  {
    host:
      "ls-feb5ed1f348d5b6bed0187196c9dbf3d4117a04f.c0r2za0sodgr.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
  }
);

database
  .sync()
  .then((r) => {})
  .catch((e) => console.log(e));

module.exports = database;
