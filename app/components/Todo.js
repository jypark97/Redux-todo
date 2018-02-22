import React from 'react';

const Todo = ({ task, completed, handleOnClick }) => {
  return (
    <li>
      <span onClick={handleOnClick} style={{cursor:'pointer'}}>
        { completed ? <strike> {task}</strike> : task }
      </span>
    </li>
  );
}

export default Todo;
