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
  characteristics: {
    sex: {
      type: String,
      enum: ["M", "F"],
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    breed: {
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

const Horse = mongoose.model("Horse", horseSchema, "Cavalo");

module.exports = Horse;
