const path = require("path");
const Notifications = require(path.join(
  __dirname,
  "./../Models/notification.model"
));

exports.all = async (req, res) => {
  try {
    const notifications = await Notifications.find();
    res.status(200).send(notifications);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.add = async (req, res) => {
  const message = req.body.message;
  const sender = req.body.sender;
  try {
    await Notifications.updateOne(
      {},
      {
        $push: {
          message: `${message} ~ ${sender}`,
        },
      }
    );
    res.status(200).send("Updated");
  } catch (err) {
    res.status(500).send(err);
  }
};
