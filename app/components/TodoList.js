import React from 'react';
import Todo from './Todo';
import actions from '../actions/index';


const TodoList =({ todos, handleToggleTodo, handleRemoveTodo}) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            display={todo.display}
            // Now we will use matching by id's instead of index
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleRemove={() => handleRemoveTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
