import React from 'react';

const Todo = ({task, completed, toggleTodo, removeTodo}) => {
  return (
    <li>
      <button onClick={removeTodo}>X</button>
      <span onClick={toggleTodo}>
        {completed ? <strike> {task} </strike> : task}
      </span>
    </li>
  );
}

export default Todo;
