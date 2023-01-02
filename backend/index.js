require("dotenv").config();
require("express-async-errors");
const express = require("express");
const colors = require('colors')
const app = express();
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')

//Connecting To MongoDb
connectDB()

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("Welcome To The Beginning");
});

app.use('/api/v1/user' , userRoutes)
app.use('/api/v1/note' , noteRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server Listening On Port ${port}`));
