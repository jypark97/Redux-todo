import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, hande=leToggleTodo }) => {
    return (
      <ul>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              toggleTodo={() => handleToggleTodo(todo.id)}
            />
          ))
        }
      </ul>
    )
  }



export default TodoList;
