//importing dependencies.
import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  //setting up state variables.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Function to save the input task.
  const handleSaveTask = () => {
    const data = {
      title,
      description,
    };
    setLoading(true);
    axios
      .post('http://localhost:8080/api/createTask', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error while saving new task, refer to console.');
      });
  };
  return (
    <div className='p-4'>
      <h1>Hey Champ! Set New Task</h1>
      {loading ? <Spinner></Spinner> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
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
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTask}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
