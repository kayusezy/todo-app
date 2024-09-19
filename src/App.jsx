// src/App.js
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
