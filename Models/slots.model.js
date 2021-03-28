const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slotsSchema = new Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    meal: { type: String },
    reading: { type: String },
    ground: { type: String },
  },
  {
    timestamps: true,
  }
);

const Slots = mongoose.model("slots", slotsSchema);

module.exports = Slots;
