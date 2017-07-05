import React from 'react';

const Todo = ({task, completed, handleOnClick, xClick}) => {
    return (
      <li>
        <button onClick={() => xClick()}> X </button>
        <span onClick={() => handleOnClick()}>
          {completed ? <strike> {task}</strike> : task}
        </span>
      </li>
    );
}

export default Todo;
