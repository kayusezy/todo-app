// src/components/Task.js
import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      <span>{task.description}</span>
      <button onClick={handleToggle}>
        {task.isDone ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

// Define PropTypes for the component
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Task;
