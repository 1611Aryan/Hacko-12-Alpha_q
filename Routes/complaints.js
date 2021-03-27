const router = require("express").Router();
const path = require("path");
const { all, add, deleteComplaint } = require(path.join(
  __dirname,
  "./../Controllers/complaint.controller.js"
));

router.route("/complaints").get(all);

router.route("/complaints").post(add);

router.route("/complaints/:id").delete(deleteComplaint);

module.exports = router;
