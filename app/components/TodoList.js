import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={todo.id} task={todo.task} completed={todo.completed}
        toggleTodo={() => toggleTodo(index)} />
      ))
    }
  </ul>
)

export default TodoList;
