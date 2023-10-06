//importing dependencies
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const DeleteTask = () => {
  //Setting up state variables.
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  //Function to handle deletion.
  const handleDeletion = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/api/deleteTask/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Some error occurred, Please see console.');
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <h1>Delete your task!</h1>
      {/* If loading state is true, render spinner component, else nothing. */}
      {loading ? <Spinner></Spinner> : ''}
      <div className='flex flex-col item-center border-2 border-sky-400-rounded-xl w-[600px] p-8 mx-auto'>
        <h2 className='text-2xl'>Are you sure you want to delete this task?</h2>
        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeletion}
        >
          Yes, Delete it!
        </button>
      </div>
    </div>
  );
};

export default DeleteTask;
