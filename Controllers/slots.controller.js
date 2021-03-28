const path = require("path");
const Slots = require(path.join(__dirname, "./../Models/slots.model"));

exports.book = async (req, res) => {
  const time = req.params.time;
  const type = req.body.type;
  const rollNumber = req.body.rollNumber;
  console.log(time, type, rollNumber);
  try {
    if (type === "meal")
      await Slots.updateOne(
        { rollNumber },
        {
          $set: {
            meal: time,
          },
        }
      );
    else if (type === "reading")
      await Slots.updateOne(
        { rollNumber },
        {
          $set: {
            reading: time,
          },
        }
      );
    else
      await Slots.updateOne(
        { rollNumber },
        {
          $set: {
            ground: time,
          },
        }
      );
    res.status(200).send("Updated");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.list = async (req, res) => {
  try {
    const slots = await Slots.find();
    res.status(200).send(slots);
  } catch (err) {
    res.status(500).send(err);
  }
};
