import React from 'react';

const Todo = ({task, completed, handleOnClick, handleRemove}) => {
    return (
      <li>
        <button onClick={handleRemove}>X</button>
        <span onClick={handleOnClick}>
          {completed ? <strike> {task}</strike> : task}
        </span>
      </li>
    );
  }

export default Todo;
