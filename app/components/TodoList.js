import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo}) => {
  return (
    <ul>
      {
        todos.map((todo, index) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => toggleTodo(index)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
