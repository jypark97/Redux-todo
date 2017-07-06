import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, filter, handleToggleTodo, handleRemove}) => {
  if (filter) {
    todos = todos.filter((todo) => !todo.completed)
  }
  return (
    <ul>
      {
        todos.map((todo, index) => {
          return <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleRemoveClick={() => handleRemove(todo.id)}
          />
        })
      }
    </ul>
  )
}

export default TodoList;
