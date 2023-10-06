/*
HTTP Status Codes used : 
200 = OK
201 = Created.
401 = Bad Request.
404 = Resource Not Found.
500 = Internal Server Error.
*/

//importing model to be processed.
import Task from '../Model/taskModel.js';

//API to fetch tasks from the database.
const getTasks = async (_req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ Count: tasks.length, tasks });
  } catch (error) {
    res.status(500).json({ Error: `Internal Server Error` });
    console.log(error.message);
  }
};

//API to get a single task with id as parameter.
const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById({ _id: id });
    if (!task) {
      res.status(404).send('Task not found!');
    }
    res.status(200).json({ Count: task.length, task });
  } catch (error) {
    console.log(error.Message);
    res.status(500).json({ Error: error.Message });
  }
};

//API to create a new task.
const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      res.status(400).json({
        Alert: `One or multiple fields missing, kindly input all the data.`,
      });
    }
    const newTask = {
      title: title,
      description: description,
    };
    const task = new Task(newTask); //Creating the object of new task in db.
    const savedTask = await task.save(); //Saving the created object.
    return res.status(201).json(savedTask);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ Message: `Internal Server Error.` });
  }
};

//API to update the tasks.
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      res.status(400).json({
        Alert: `One or multiple fields missing, kindly input all the data.`,
      });
    } else {
      const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (!task) {
        res.status(404).send('Task not found!');
      }
      res.status(201).json({ Data: task });
    }
  } catch (error) {
    console.log(error.Message);
    res.status(500).send({ Error: `Internal Server Error` });
  }
};

//API to delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete({ _id: id });
    if (!task) {
      res.status(404).send(`Task not found!`);
    }
    res.status(200).json({ Deleted: task });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ Error: `Internal Server Error` });
  }
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
};
