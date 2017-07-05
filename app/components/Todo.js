import React from 'react';

// logic moves OUT of the component
const Todo = ({task, completed, handleOnClick, handleOnDoubleClick}) => {
  return (
    <li>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      {' '}<button onDoubleClick={handleOnDoubleClick}>X</button>
    </li>
  );
}

export default Todo;
