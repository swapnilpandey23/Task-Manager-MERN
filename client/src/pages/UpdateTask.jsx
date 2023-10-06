//importing required dependencies.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTask = () => {
  //Setting up state variables.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  //useEffect hook to fetch data, and set up id as dependency, to re-fetch or mount component again when id changes.
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/getTask/${id}`)
      .then((response) => {
        console.log(response.data.task);
        setTitle(response.data.task.title);
        setDescription(response.data.task.description);
        setCompleted(response.data.task.completed);

        setLoading(false);
      })
      .catch((error) => {
        alert('Error occurred, Please check console.');
        console.log(error.message);
      });
  }, [id]); // Include id as a dependency to re-fetch data when id changes.

  // Function to handle edit task operation
  const handleEditTask = () => {
    const data = {
      title,
      description,
      completed,
    };
    setLoading(true);
    axios
      .put(`http://localhost:8080/api/updateTask/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error while saving the task, refer to console.');
      });
  };

  return (
    <div className='p-4'>
      <h1>Update your task, Hope you did it!</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          {/* Using read-only attribute, so that title remains un-edited. */}
          <input
            type='text'
            value={title}
            readOnly
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <label className='text-xl mr-4 text-gray-500'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <div className='flex items-center'>
            <label className='text-xl mr-4 text-gray-500'>Completed?</label>
            <input
              type='checkbox'
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className='form-checkbox h-6 w-6 text-sky-500 focus:ring-sky-300'
            />
          </div>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditTask}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateTask;
