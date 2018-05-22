import React from 'react';

const Todo = ({completed, task, handleOnClick}) => {
  return (
    <li>
      <span onClick={() => handleOnClick()}>
        {completed ? <strike> {task}</strike> : task}
      </span>
    </li>
  );
}



export default Todo;
