const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv').config();

const port = 5000;

// to allow your frontend
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

//lets connect to mongodb..




//lets import




//middleware
// app.use("/user", userRouter);


//DB Connection
mongoose.connect(process.env.DB)
.then(() => {
  console.log("DB Connected");
}).catch((err) => {
  
});


//to start server
app.listen(port, () => {
  console.log("server started");
});