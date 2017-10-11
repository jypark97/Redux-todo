import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, handleClick}) => {
  console.log(todos);
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => handleClick(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
