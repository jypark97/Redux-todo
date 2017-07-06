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
            // Now we will use matching by id's instead of index
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleOnDblClick={() => handleDeleteTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
