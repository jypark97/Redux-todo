import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, handleToggleTodo, handleRemoveTodo}) => {
    return (
      <ul>
        {todos.map((todo) => {
          if (todo.show) {
            return (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              handleOnClick={() => handleToggleTodo(todo.id)}
              xClick = {() => handleRemoveTodo(todo.id)}
            />
          )
          }
        })}
      </ul>
    )
}

export default TodoList;
