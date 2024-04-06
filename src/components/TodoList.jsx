import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    setTasks([]);
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>ToDo List</h2>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ marginRight: '10px', padding: '5px', flex: '1' }}
          placeholder="Enter task"
        />
        <button
          onClick={handleAddTask}
          style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px', padding: '5px 10px', cursor: 'pointer' }}
        >
          Add Task
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px', padding: '5px 10px', marginLeft: '10px', marginRight: '5px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
