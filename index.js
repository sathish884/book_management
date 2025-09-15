const userRouter = require('./routes/UserRoutes');
const bookRoutes = require('./routes/BooksRoutes');

//const envFile = path.resolve(process.cwd(), "env", `.env.${process.env.NODE_ENV || "development"}`);

//console.log("Loaded ENV from:", envFile); // DEBUG
//console.log("MONGO_URI =", process.env.MONGO_URI); // DEBUG

//"prod": "cross-env NODE_ENV=production nodemon index.js",
//    "test": "cross-env NODE_ENV=test nodemon index.js"
//if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
//}


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

// connect to database
connectDB();

app.get("/", (req, res) => {
    res.send(`Hello from ${process.env.NODE_ENV} environment`);
});

app.listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is running on port ${PORT}`);
});
