const path = require("path");
const Hosteller = require(path.join(__dirname, "./../Models/hosteller.model"));

exports.allStudents = async (req, res) => {
  try {
    const students = await Hosteller.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.add = async (req, res) => {
  const name = req.body.name;
  const rollNumber = req.body.rollNumber;
  const year = req.body.year;
  const hostel = req.body.hostel;
  const password = req.body.password;

  const newHosteller = new Hosteller({
    name,
    rollNumber,
    year,
    hostel,
    password,
  });

  try {
    await newHosteller.save();
    res.send("Added");
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

exports.login = async (req, res) => {
  const rollNumber = req.body.rollNumber;
  const password = req.body.password;
  try {
    const user = await Hosteller.findOne({ rollNumber });
    user
      ? user.password === password
        ? res
            .send({ success: true, message: "Login Successful", user })
            .status(200)
        : res.send({ success: false, message: "Incorrect Password" })
      : res
          .send({ success: false, message: "Incorrect Roll Number" })
          .status(404);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const student = await Hosteller.findById(req.params.id);
    student.response.sent = req.body.sent;
    student.response.eating = req.body.eating;

    await student.save();
    res.send("Updated");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
