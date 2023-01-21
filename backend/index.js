const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouters = require("./routers/userRouters");
const TodoRouter = require("./routers/todoRouter");

const app = express();
//use expess.json() to get data into json format
app.use(express.json());

const cors = require("cors");

//lets import
// const TodoRouter = require("./routers/todoRouter");

const port = 5000;

// to allow your frontend
app.use(cors({ origin: ["http://localhost:3000"] }));

//middleware
app.use("/user", userRouters);
app.use("/todo", TodoRouter);

//lets connect to mongodb..
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB not connected");
    console.log(err);
  });

//to start server
app.listen(port, () => {
  console.log("server started");
});
