import React from 'react';

const Todo = ({task, completed, handleOnClick,handleOnClickRemove}) => {
  return (
    <li>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      <button onClick={handleOnClickRemove}>
        X
      </button>
    </li>
  );
}

export default Todo;
