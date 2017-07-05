import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, toggleTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by id's instead of index
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
