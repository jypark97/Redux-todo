import React from 'react';

const Todo = ({task, completed, handleOnClick, handleDblClick}) => {
    return (
      <li>
        <span onClick={handleOnClick} style={{cursor: 'pointer'}}>
          {completed ? <strike> {task}</strike> : task}
        </span>
        <button onClick={handleDblClick}>x</button>

      </li>
    );
}

export default Todo;
