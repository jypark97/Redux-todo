import React from 'react';

const Todo = ({task, completed, handleOnClick, handleOnDblClick}) => {
  return (
    <li>
      <span
        onClick={handleOnClick}
        onDoubleClick={
          handleOnDblClick
        }>
        {completed ? <strike> {task} </strike> : task} <button onClick={handleOnDblClick}>x</button>
      </span>
    </li>
  );
}

export default Todo;
