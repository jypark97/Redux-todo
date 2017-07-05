import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';


let id = 0;

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        {/* leave this alone for now */}
        <InputLine
          addTodo={(task) => this.addTodo(task)}
        />
        {/*this.state.todos will not exist so we need to fix this*/}
        <TodoList
          todos={this.state.todos}
          toggleTodo={(id) => this.toggleTodo(id)}
        />
      </div>
    );
  }
}

export default TodoApp;
