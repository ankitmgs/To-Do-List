const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;

// to allow your frontend
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());


//middleware
// app.use("/user", userRouter);


//to start server
app.listen(port, () => {
  console.log("server started");
});