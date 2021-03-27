const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hostellerSchema = new Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    year: { type: String, required: true },
    batch: { type: String, required: true },
    stream: { type: String, required: true },
    hostel: { type: String, required: true },
    password: { type: String, required: true },
    response: {
      sent: { type: Boolean, default: false },
      eating: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
  }
);

const Hosteller = mongoose.model("Hostellers", hostellerSchema);

module.exports = Hosteller;
