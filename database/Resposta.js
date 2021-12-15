const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define(
  "respostas",
  {
    corpo: {
      type: Sequelize.TEXT,
      allwNull: false,
    },
    perguntaId: {
      type: Sequelize.INTEGER,
      allwNull: false,
    },
  },
  { schema: "guiapergunta" }
);

Resposta.sync({ force: false }).then(() => {
  console.log("tabela criada Respostas");
});

module.exports = Resposta;
