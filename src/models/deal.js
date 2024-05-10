const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  horseId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: false,
  },
  daysHosted: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Deal = mongoose.model("Deal", dealSchema);

module.exports = Deal;
