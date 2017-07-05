import React from 'react';
import Todo from './Todo';

const TodoList =({ visibilityFilter, todos, toggleTodo, removeTodo }) => {
  let finalArr = [];
  if (visibilityFilter === 'SHOW_COMPLETED') {
    finalArr = todos.filter((todo) => {
      return todo.completed === true;
    })
  }
  else if (visibilityFilter === 'SHOW_UNCOMPLETED') {
    finalArr = todos.filter((todo) => {
      return todo.completed === false;
    })
  }
  else {
    finalArr = [ ...todos ]
  }
  return (
    <ul>
      {
        finalArr.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by id's instead of index
            handleOnClick={() => toggleTodo(todo.id)}
            removeTodo={() => removeTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
