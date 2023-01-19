const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv').config();

const port = 5000;

// to allow your frontend
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());


//middleware
// app.use("/user", userRouter);


//DB Connection
mongoose.connect(process.env.DB)
.then(() => {
  console.log("DB Connected");
}).catch((err) => {
  console.log("DB not connected");
  console.log(err);
});


//to start server
app.listen(port, () => {
  console.log("server started");
});