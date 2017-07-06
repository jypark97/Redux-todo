import React from 'react';

const Todo = ({task, completed, handleOnClick, handleDeleteButtonClick}) => {
  return (
    <li>
      <button onClick={handleDeleteButtonClick}>X</button>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task} </strike> : task}
      </span>
    </li>
  );
}

export default Todo;
