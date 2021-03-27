const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaintSchema = new Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    issue: { type: String, required: true },
    roomNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("complaints", complaintSchema);

module.exports = Complaint;
