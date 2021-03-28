const router = require("express").Router();
const path = require("path");
const { all } = require(path.join(
  __dirname,
  "./../Controllers/students.controller"
));

router.route("/").get(all);

module.exports = router;
