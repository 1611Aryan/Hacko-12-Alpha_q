const router = require("express").Router();
const path = require("path");
const { allStudents, login, add, update } = require(path.join(
  __dirname,
  "./../Controllers/hosteller.controller"
));

router.route("/").get(allStudents);

router.route("/:id").put(update);

router.route("/add").post(add);

router.route("/login").post(login);

module.exports = router;
