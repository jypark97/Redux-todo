import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo, removeComplete}) => {
  return (
    <div>
    <button onClick={removeComplete}>Remove Completed Tasks</button>
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleDblClick={() => handleDeleteTodo(todo.id)}
          />
        ))
      }
    </ul>
    </div>
  )
}

export default TodoList;
