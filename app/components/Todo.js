import React from 'react';

const Todo = ({completed, task, handleOnClick, deleteTodo}) => {
  return (
    <li>
      <span onClick={() => handleOnClick()}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      <button onClick={() => deleteTodo()}> X </button>
    </li>
  );
}



export default Todo;
