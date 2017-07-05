import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, handleToggleTodo, handleRemoveTodo}) => {
  return (
    <div>
      <button>extra credit...</button>
      <ul>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              // Now we will use matching by id's instead of index
              handleOnClick={() => handleToggleTodo(todo.id)}
              handleOnDoubleClick={() => handleRemoveTodo(todo.id)}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
