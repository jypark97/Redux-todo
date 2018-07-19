import React from 'react';
import Todo from './Todo';

let TodoList = ({todos, handleToggleTodo, handleRemove}) => {
    return (
      <ul>
        {
          todos.filter((each) => each.display).map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              handleOnClick={() => handleToggleTodo(todo.id)}
              handleRemove={() => handleRemove(todo.id)}
            />
          ))
        }
      </ul>
    )
  }


export default TodoList;
