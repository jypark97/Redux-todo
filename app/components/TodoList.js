import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleToggleTodo }) => {
  return (
    <ul>
      {
        this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleTodo={() => handleToggleTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
