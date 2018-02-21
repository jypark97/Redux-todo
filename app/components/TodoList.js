import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, handleToggleTodo, handleDeleteTodo}) => {
    return (
      <ul>
        {
          todos.filter((todo) => todo.visible).map((todo) =>
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              // they're saying toggleTodo= should be handleOnClick=
              toggleTodo={() => handleToggleTodo(todo.id)}
              deleteTodo={() => handleDeleteTodo(todo.id)}
            />
          )
        }
      </ul>
    )
};

export default TodoList;
