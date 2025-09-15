const userRouter = require('./routes/UserRoutes');
const bookRoutes = require('./routes/BooksRoutes');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});



const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// API routes
app.use('/api', userRouter);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 8080;

console.log("Loaded env file:", `.env.${process.env.NODE_ENV || "development"}`);
console.log("MONGO_URI:", process.env.MONGO_URI);


// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send(`Hello from ${process.env.NODE_ENV} environment`);
});

app.listen(PORT, () => {
  console.log(`[${process.env.NODE_ENV}] Server is running on port ${PORT}`);
});
