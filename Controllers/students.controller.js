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
