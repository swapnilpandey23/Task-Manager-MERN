// importing mongoose ODM library.
import mongoose from 'mongoose';

// Defining the Task schema.
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creating the Task model.
const Task = mongoose.model('Task', taskSchema);

export default Task;
