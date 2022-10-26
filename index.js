const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Booster Courses API is Running!");
});
const categories = require("./data/categories.json");
app.get("/course-categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log("Booster Courses Api Running on Port: ", port);
});
