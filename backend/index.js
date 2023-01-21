const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const todoModals = require("./modals/todoModals");
const dotenv = require("dotenv").config();
const userRouters = require("./routers/userRouters");
const TodoRouter = require("./routers/todoRouter");

const port = 5000;

// to allow your frontend
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

//middleware
app.use("/user", userRouters);

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

//middleware
// app.use("/", TodoRouter);
app.use("/todo", TodoRouter)

//to start server
app.listen(port, () => {
  console.log("server started");
});
