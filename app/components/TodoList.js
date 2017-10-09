import React from 'react';
import Todo from './Todo';

const TodoList= ({todos,toggleTodo, deleteTodo}) => {
  // console.log(todos);
    return (
      <ul>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              handleOnClick={() => toggleTodo(todo.id)}
            />
          ))
        }
      </ul>
    )
}
function test(evt) {
  console.log(evt);
}

export default TodoList;
