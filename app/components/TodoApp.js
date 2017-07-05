import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';


let id = 0;

// class TodoApp extends React.Component {
const TodoApp = ({todos, addTodoClick, toggleTodoClick}) => {
  //remove state so redux is single source of truth
  // constructor(props) {
  //   super(props);
  //   this.state = { todos: [] };
  // }


//reducer should handle creating a new state after a TOGGLE action
  // toggleTodo(index) {
  //   const newTodo = Object.assign(
  //     {},
  //     this.state.todos[index],
  //     { completed: !this.state.todos[index].completed }
  //   );
  //   const newTodos = [
  //     ...this.state.todos.slice(0, index),
  //     newTodo,
  //     ...this.state.todos.slice(index + 1)
  //   ];
  //   this.setState({ todos: newTodos });
  // }

  // addTodo(task) {
  //   const newTodo = {
  //     id: id++,
  //     task: task,
  //     completed: false
  //   };
  //   const newTodos = [ ...this.state.todos ]
  //   newTodos.push(newTodo);
  //   this.setState({ todos: newTodos });
  // }

  render() {
    return (
      <div>
        <InputLine
          addTodo={(text) => addTodoClick(id+1, text)}
        />

        <TodoList
          todos={todos}
          toggleTodo={(id) => toggleTodoClick(id)}
          // removeTodo={(index) => this.removeTodo(index)}
        />
      </div>
    );
  }
}

export default TodoApp;
