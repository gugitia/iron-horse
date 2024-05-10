const mongoose = require("mongoose");
//falta adicionar sub-documento com as documentações do cavalo
const horseSchema = new mongoose.Schema({
  horseName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  service: {
    type: String,
    required: true,
  },
  caracteristicas: {
    sexo: {
      type: String,
      enum: ["M", "F"],
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
    tamanho: {
      type: String,
      required: true,
    },
    cor: {
      type: String,
      required: true,
    },
    valor: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    raca: {
      type: String,
      required: true,
    },
  },
  ownerId: {
    type: String,
    required: true,
  },
  homeCity: {
    type: String,
    required: true,
  },
  Images: {
    type: [String],
    default: "default.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Horse = mongoose.model("Horse", horseSchema);

module.exports = Horse;
