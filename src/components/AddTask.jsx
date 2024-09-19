// src/components/AddTask.js
import  { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), description, isDone: false },
      });
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
