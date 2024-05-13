const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  senderId: {
    type: String,
    required: true,
  },
  getterId: {
    type: String,
    required: true,
  },
});

const Msg = mongoose.model("Msg", msgSchema, "Mensagens");

module.exports = Msg;
