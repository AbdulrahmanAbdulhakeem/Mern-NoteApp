require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("Welcome To The Beginning");
});

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server Listening On Port ${port}`));
