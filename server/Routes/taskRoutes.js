//importing dependencies and modules required.
import express from 'express';
import taskController from '../Controllers/taskController.js';

const router = express.Router(); //Instantiating express.

//Setting up API endpoints.
router.get('/getTasks', taskController.getTasks);
router.get('/getTask/:id', taskController.getOneTask);
router.post('/createTask', taskController.createTask);
router.put('/updateTask/:id', taskController.updateTask);
router.delete('/deleteTask/:id', taskController.deleteTask);

export default router;
