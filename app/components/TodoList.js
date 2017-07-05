import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul>
      {
        todos.map((todo, idx) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by id's instead of index
            handleOnClick={() => handleToggleTodo(idx)}
            handleButtonClick={() => handleDeleteTodo(idx)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;