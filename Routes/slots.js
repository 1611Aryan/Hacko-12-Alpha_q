const router = require("express").Router();
const path = require("path");
const { book, list } = require(path.join(
  __dirname,
  "./../Controllers/slots.controller"
));

router.route("/:time").put(book);

router.route("/all").get(list);

module.exports = router;
