import React from 'react';

const Todo = ({task, completed, toggleTodo}) => {
  return (
    <li>
        <span className="waves-effect waves-light btn" onClick={toggleTodo}>
          {completed ? <strike> {task} </strike> : task}
        </span>
    </li>
  )
}

export default Todo;
