import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';


let id = 0;

const TodoApp = ({ todos, addTodoClick, toggleTodoClick}) => {
  return (
    <div>
      <InputLine
        addTodo={(task) => this.addTodo(task)}
      />
      <TodoList
        todos={this.state.todos}
        toggleTodo={(index) => this.toggleTodo(index)}
        removeTodo={(index) => this.removeTodo(index)}
      />
    </div>
  );
}

export default TodoApp;
