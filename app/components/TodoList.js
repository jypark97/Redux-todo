import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, filterFunction, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul>
      {
        todos.filter(filterFunction).map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleDeleteButtonClick={() => handleDeleteTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
