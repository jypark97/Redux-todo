import React from 'react';

const Todo = ({ task, completed, handleOnClick, handleOnDoubleClick }) => {
  return (
    <li>
      <span
        onDoubleClick={handleOnDoubleClick}
        onClick={handleOnClick}
      >
        {completed ? <strike> {task} </strike> : task}
      </span>
      
    </li>
  );
}

export default Todo;
