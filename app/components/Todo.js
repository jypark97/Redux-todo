import React from 'react';

const Todo = ({ task, completed, handleOnClick, handleButtonClick }) => {
  return (
    <li>
      <button onClick={handleButtonClick}><b>X</b></button>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task} </strike> : task}
      </span>
    </li>
  );
}

export default Todo;