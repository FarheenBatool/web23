const express = require("express");
const server = express();
const path = require("path");
const mongoose = require("mongoose");

server.use(express.json());


server.use("/", require("./public/routes/api/stores"));

const publicPath = path.join(__dirname, "public");
const viewsPath = path.join(publicPath, "views");

server.set("view engine", "ejs");
server.set("views", viewsPath);
server.use(express.static(publicPath));

// Route handler
server.get("/", (req, res) => {
  res.render("index");
});

mongoose
  .connect("mongodb://localhost/project", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(3000, () => {
      console.log("Server started, visit localhost:3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
