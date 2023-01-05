require("dotenv").config();
require("express-async-errors");
const express = require("express");
const colors = require('colors')
const cors = require("cors");
const app = express();
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')
const authMiddleware = require('./middleware/authMiddleware')
const notFoundMiddleware = require('./middleware/not-found')

//Connecting To MongoDb
connectDB()

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/api/v1/user' , userRoutes)
app.use('/api/v1/note' ,authMiddleware, noteRoutes)

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server Listening On Port ${port}`));
