import React from 'react';

const Todo = ({task, completed, handleOnClick, handleRemoveClick}) => {
  return (
    <li>
      <button onClick={handleRemoveClick}>X</button>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task}</strike> : task}
      </span>
    </li>
  );
}

export default Todo;
