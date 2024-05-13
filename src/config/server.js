const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/WoodenHorse", {
      
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso na porta 27017");
  } catch (error) {
    console.error("Erro ao conectar-se ao MongoDB:", error);
  }
}

module.exports = { connect };
