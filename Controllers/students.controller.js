const path = require("path");
const Students = require(path.join(__dirname, "./../Models/students.model"));

exports.all = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addMarks = async (req, res) => {
  const category = req.body.category;
  const rollNumber = req.body.rollNumber;
  const marks = req.body.marks;
  try {
    if (category === "MST")
      await Students.updateOne(
        { rollNumber },
        {
          $set: {
            "marks.MST": marks,
          },
        }
      );
    else if (category === "EST")
      await Students.updateOne(
        { rollNumber },
        {
          $set: {
            "marks.EST": marks,
          },
        }
      );
    else
      await Students.updateOne(
        { rollNumber },
        {
          $set: {
            "marks.sessional": marks,
          },
        }
      );
    res.status(200).send("Updated");
  } catch (err) {
    res.status(500).send(err);
  }
};
