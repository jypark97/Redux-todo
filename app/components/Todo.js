import React from 'react';

const Todo = ({ task, completed, handleOnClick, handleOnDelete }) => {
    return (
      <li>
        <span onClick={handleOnClick}>
          {completed ? <strike> {task} </strike> : task}
        </span>
        <button onClick={handleOnDelete}> X </button>
      </li>
    );
  }

export default Todo;
