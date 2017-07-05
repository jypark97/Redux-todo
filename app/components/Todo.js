import React from 'react';

const Todo = ({task, completed, handleOnClick}) => {
  return (
    <li>
        <span onClick={handleOnClick}>
          {completed ? <strike> {task} </strike> : task}
        </span>
    </li>
  )
}

export default Todo;
