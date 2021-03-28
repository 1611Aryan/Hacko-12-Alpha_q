const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    year: { type: String, required: true },
    batch: { type: String, required: true },
    submission: { type: Array },
  },
  {
    timestamps: true,
  }
);

const Students = mongoose.model("students", studentSchema);

module.exports = Students;
