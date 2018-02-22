import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleOnDelete={() => handleDeleteTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
