const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Booster Courses API is Running!");
});
const categories = require("./data/categories.json");
const courses = require("./data/courses.json");
app.get("/course-categories", (req, res) => {
  res.send(categories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(courses);
  } else {
    const category_course = courses.filter((course) => course.category_id === id);
    res.send(category_course);
  }
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id === id);
  res.send(selectedCourse);
});
app.listen(port, () => {
  console.log("Booster Courses Api Running on Port: ", port);
});
