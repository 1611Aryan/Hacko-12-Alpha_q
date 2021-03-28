const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationsSchema = new Schema(
  {
    notification: { type: Array },
  },
  {
    timestamps: true,
  }
);

const Notifications = mongoose.model("notifications", notificationsSchema);

module.exports = Notifications;
