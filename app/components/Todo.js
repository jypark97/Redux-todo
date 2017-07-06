import React from 'react';

const Todo = ({task, completed, handleOnClick, deleteTodoClick}) => {
  return (
    <li>
      <button onClick={deleteTodoClick}>Delete</button>
        <span onClick={handleOnClick}>{completed ? <strike> {task} </strike> : task}</span>
    </li>
  );
}

export default Todo;
