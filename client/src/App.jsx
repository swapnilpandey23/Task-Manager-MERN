//importing pages, components and dependencies.
import DeleteTask from './pages/DeleteTask';
import TaskList from './pages/TaskList';
import UpdateTask from './pages/UpdateTask';
import CreateTask from './pages/CreateTask';
import { Routes, Route } from 'react-router-dom';

//Setting up routing for the pages/components.
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TaskList />}></Route>
      <Route path='/newTask' element={<CreateTask />}></Route>
      <Route path='/updateTask/:id' element={<UpdateTask />}></Route>
      <Route path='/DeleteTask/:id' element={<DeleteTask />}></Route>
    </Routes>
  );
};
export default App;
