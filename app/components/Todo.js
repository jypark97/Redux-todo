import React from 'react';

const Todo = ({task, completed, handleOnClick, removeTodo}) => {
  return (
    <li>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task } </strike> : task }
      </span>
      <button type="button" onClick={removeTodo}>Remove</button>
    </li>
  );
}

export default Todo;
