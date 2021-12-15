const Sequelize = require("sequelize");

const conection = new Sequelize("teste_local", "postgres", "123", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = conection;
