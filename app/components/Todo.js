import React from 'react';

// TODO should toggleTodo be handleOnClick?
const Todo = ({completed, task, toggleTodo, deleteTodo}) => {
    return (
      <li>
        <button onClick={deleteTodo}style={{marginRight: '10px'}}>X</button>
        <span onClick={toggleTodo}>
          {completed ? <strike>{task}</strike> : task}
        </span>
      </li>
    );
}

export default Todo;
