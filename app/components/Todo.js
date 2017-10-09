import React from 'react';

const Todo = ({task, completed, toggleTodo}) => (
  <li>
    <span onClick={() => toggleTodo()}>
      {completed ? <strike>{task}</strike> : task}
    </span>
  </li>
)

export default Todo;
