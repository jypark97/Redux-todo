import React from 'react';
import Todo from './Todo';

const TodoList = ({todos,handleToggleTodo,handleRemoveTodo}) => (
  <div className="collection">
    {
      todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          handleRemoveClick={()=>handleRemoveTodo(todo.id)}
          handleOnClick={() => handleToggleTodo(todo.id)}
        />
      ))
    }
  </div>
)

export default TodoList;
