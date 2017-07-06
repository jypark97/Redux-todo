import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, handleToggleTodo, handleRemoveTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by id's instead of index
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleRemoveTodo={()=> handleRemoveTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
