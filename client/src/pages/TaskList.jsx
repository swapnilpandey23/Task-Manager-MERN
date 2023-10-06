//importing dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../components/Spinner';

const TaskList = () => {
  //Setting state variables for the data processing.
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  //useEffect hook to fetch the data when component mounts.
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8080/api/getTasks')
      .then((response) => {
        console.log(response.data.tasks); //.tasks because in the controller I passed json object with tasks.
        setTasks(response.data.tasks);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  //Rendering the page/component.
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Task Manager</h1>
        <Link to={'/newTask'}>
          <MdOutlineAddBox className='text-sky-800 text-4xl'></MdOutlineAddBox>
        </Link>
      </div>
      {/*I've set up a tailwind spinner component, so a condition here when the data is being fetched from server. */}
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>
                Description
              </th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>
                Completed?
              </th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {/* Iterating through the fetched object stored in tasks state */}
            {tasks.map((tasks, index) => (
              <tr key={tasks._id}>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {tasks.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {tasks.description}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {tasks.completed.toString()}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  <div className='flex justify-center gap-x-4'>
                    {/* Passing id to the link for the operation of respected documents. */}
                    <Link to={`/updateTask/${tasks._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/deleteTask/${tasks._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
