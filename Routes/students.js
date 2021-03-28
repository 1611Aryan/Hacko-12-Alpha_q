const router = require("express").Router();
const path = require("path");
const { all, addMarks } = require(path.join(
  __dirname,
  "./../Controllers/students.controller"
));

router.route("/").get(all);

router.route("/marks").put(addMarks);

module.exports = router;
