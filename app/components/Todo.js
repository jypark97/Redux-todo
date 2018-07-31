import React from 'react';

const Todo = ({ task, completed, handleOnClick, handleDelete }) => {
  return (
    <li>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task} </strike> : task }
      </span>
      <button onClick={handleDelete}>x</button>
    </li>
  );
}

export default Todo;
