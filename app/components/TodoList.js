import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, handleToggleTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by todo id's instead of index
            // to figure out which todo should be toggled
            toggleTodo={() => handleToggleTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;

