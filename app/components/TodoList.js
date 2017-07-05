import React from 'react';
import Todo from './Todo';
import toggle from '../actions/index'

const TodoList = ({todos, toggleTodo, removeTodo, visibilityFilter}) => {
  let finalArr = [];
  if (visibilityFilter === 'SHOW_COMPLETED') {
    finalArr = todos.filter((todo) => (
      todo.completed === true
    ))
  }
  else if (visibilityFilter === 'SHOW_NOT_COMPLETED') {
    finalArr = todos.filter((todo) => (
      todo.completed === false
    ))
  }
  else {
    finalArr = todos;
  }
  return (
    <ul>
      {
        finalArr.map((todo, index) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleTodo={() => toggleTodo(todo.id)}
            removeTodo={() => removeTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
