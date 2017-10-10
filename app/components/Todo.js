import React from 'react';

const Todo = ({task, completed, toggleStrike, removeTask}) => {
  return (
    <li>
      <span onClick={toggleStrike} >
        {completed ? <strike> {task} </strike> : task}
      </span>
      
      <button type="button" onClick={removeTask}>button</button>
      
      
    </li>
  );
}

export default Todo;
