import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo } from '../actions/index.js';
import { toggleTodo } from '../actions/index.js';
import { removeTodo } from '../actions/index.js';
import { filterTodo } from '../actions/index.js';

let id = 0;

let TodoApp =({ todos, addTodoClick, toggleTodoClick, removeTodoClick, handleClick }) => {
  return (
    <div>
    <div>
      <button onClick={() => handleClick('complete')}> Complete </button>
      <button onClick={() => handleClick('incomplete')}> Incomplete </button>
      <button onClick={() => handleClick('all')}> Show All </button>
    </div>
    <div>
      {/* leave this alone for now */}
      <InputLine
        addTodo={(text) => addTodoClick(id++, text)}
      />
      <TodoList
        todos={todos}
        handleToggleTodo={(id) => toggleTodoClick(id)}
        handleRemoveTodo={(id) => removeTodoClick(id)}

      />
    </div>
  </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodoClick: (id) => {
      dispatch(removeTodo(id))
    },
    handleClick: (completed) => {
      dispatch(filterTodo(completed))
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);


export default TodoApp;
//initial
// import React from 'react';
// import InputLine from './InputLine';
// import TodoList from './TodoList';
//
//
// let id = 0;
//
// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { todos: [] };
//   }
//
//   toggleTodo(index) {
//     const newTodo = Object.assign(
//       {},
//       this.state.todos[index],
//       { completed: !this.state.todos[index].completed }
//     );
//     const newTodos = [
//       ...this.state.todos.slice(0, index),
//       newTodo,
//       ...this.state.todos.slice(index + 1)
//     ];
//     this.setState({ todos: newTodos });
//   }
//
//   addTodo(task) {
//     const newTodo = {
//       id: id++,
//       task: task,
//       completed: false
//     };
//     const newTodos = [ ...this.state.todos ]
//     newTodos.push(newTodo);
//     this.setState({ todos: newTodos });
//   }
//
//   render() {
//     return (
//       <div>
//         <InputLine
//           addTodo={(task) => this.addTodo(task)}
//         />
//         <TodoList
//           todos={this.state.todos}
//           toggleTodo={(index) => this.toggleTodo(index)}
//           removeTodo={(index) => this.removeTodo(index)}
//         />
//       </div>
//     );
//   }
// }
//
// export default TodoApp;
