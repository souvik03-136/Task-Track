const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  title: {
    type: String,
    required: true,
  },
  sourceLink: {
    type: String,
    required: true,
    match: /^(http|https):\/\/[^ "]+$/,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
    enum: ["imp", "pri", "sec"],
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
