import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
// import connect to connect TodoApp to the
// resources it needs from redux store (which
// is available because the app is wrapped
// by <Provider> in app.js
import { connect } from 'react-redux';
// import the action creator for dispatch usage
import { addTodo } from '../actions/index';
import {toggleTodo} from '../actions/index';
import {removeTodo} from '../actions/index';

let id = 0;

// class TodoApp extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { todos: [] };
//   // }
//
//   // toggleTodo(index) {
//   //   const newTodo = Object.assign(
//   //     {},
//   //     this.state.todos[index],
//   //     { completed: !this.state.todos[index].completed }
//   //   );
//   //   const newTodos = [
//   //     ...this.state.todos.slice(0, index),
//   //     newTodo,
//   //     ...this.state.todos.slice(index + 1)
//   //   ];
//   //   this.setState({ todos: newTodos });
//   // }
//
//   // addTodo(task) {
//   //   const newTodo = {
//   //     id: id++,
//   //     task: task,
//   //     completed: false
//   //   };
//   //   const newTodos = [ ...this.state.todos ]
//   //   newTodos.push(newTodo);
//   //   this.setState({ todos: newTodos });
//   // }
//
//   render() {
//     return (
//       // <div>
//       //   <InputLine
//       //     addTodo={(task) => this.addTodo(task)}
//       //   />
//       //   <TodoList
//       //     todos={this.state.todos}
//       //     toggleTodo={(index) => this.toggleTodo(index)}
//       //     removeTodo={(index) => this.removeTodo(index)}
//       //   />
//       // </div>
//       <div>
//         <InputLine
//             addTodo={(text) => addTodoClick(id++, text)}
//         />
//         <TodoList
//             todos={todos}
//             handleToggleTodo={(id) => toggleTodoClick(id)}
//         />
//         </div>
//     );
//   }
// }
let TodoApp =({ todos, addTodoClick, toggleTodoClick, removeTodoClick  }) => {
  return (
      <div>
        <InputLine
            addTodo={(task) => addTodoClick(id++, task)}
        />
        <TodoList
            todos={todos}
            handleToggleTodo={(id) => toggleTodoClick(id)}
            handleRemoveTodo={(id) => removeTodoClick(id)}
        />
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
    }
  }
}

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);

export default TodoApp;
