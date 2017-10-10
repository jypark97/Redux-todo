import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => toggleTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
