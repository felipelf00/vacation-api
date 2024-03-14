const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  startDate: {
    type: String, //storing dates as strings for simplicity
    maxLength: 10,
  },
  endDate: {
    type: String, //storing dates as strings for simplicity
    maxLength: 10,
  },
  location: {
    type: String,
    maxLength: 100,
  },
  participants: {
    type: String,
    maxLength: 100,
  },
  description: {
    type: String,
    maxLength: 1000,
  },
});

module.exports = mongoose.model("Plan", PlanSchema);
