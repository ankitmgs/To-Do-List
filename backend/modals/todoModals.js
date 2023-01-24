// import mongoose to create new Schema
const mongoose = require("mongoose");

//create schema
const ToDoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  created: { type: Date, default: new Date() },
});
// export this schema
module.exports = mongoose.model("todo", ToDoItemSchema);
