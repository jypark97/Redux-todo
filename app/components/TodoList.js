import React from 'react';
import Todo from './Todo';

const TodoList =({todos, handleToggleTodo,removeTodo}) => {

    return (
      <ul>
        {todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              handleOnClick={() => handleToggleTodo(todo.id)}
              handleOnDouble={() => removeTodo(todo.id)}
            />
          ))
        }
      </ul>
    )

}

export default TodoList;
