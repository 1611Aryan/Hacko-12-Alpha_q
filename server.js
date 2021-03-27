const express = require("express");
const path = require("path");
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const url = process.env.MONGOURI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => console.log("Database is Connected"));
app.use(express.json());

const hostellerRouter = require(path.join(__dirname, "./Routes/hosteller"));
const complaintsRouter = require(path.join(__dirname, "./Routes/complaints"));

app.use("/student", hostellerRouter);
app.use("/administrator", complaintsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use("/choose", express.static(path.join(__dirname, "client/build")));
  app.use("/menu", express.static(path.join(__dirname, "client/build")));
  app.use(
    "/request-service",
    express.static(path.join(__dirname, "client/build"))
  );
  app.use("/attendance", express.static(path.join(__dirname, "client/build")));
  app.use("/admin", express.static(path.join(__dirname, "client/build")));
  app.use("/admin/mess", express.static(path.join(__dirname, "client/build")));
  app.use(
    "/admin/attendance",
    express.static(path.join(__dirname, "client/build"))
  );
  app.use(
    "/admin/complaints",
    express.static(path.join(__dirname, "client/build"))
  );
  app.use(
    "/admin/students",
    express.static(path.join(__dirname, "client/build"))
  );
  app.use("/admin/staff", express.static(path.join(__dirname, "client/build")));
}

app.listen(port, () => console.log(`Server Running on port ${port}`));
