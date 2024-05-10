const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/meu-banco-de-dados", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar-se ao MongoDB:", error);
  }
}

module.exports = { connect };
