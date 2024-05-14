const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://gugitia:OAvY2YFT2Uc95DVj@cluster0.woumhwq.mongodb.net/WoodenHorse", {
      
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso no cluster cluster0.woumhwq.mongodb.net/WoodenHorse");
  } catch (error) {
    console.error("Erro ao conectar-se ao MongoDB:", error);
  }
}

module.exports = { connect };
