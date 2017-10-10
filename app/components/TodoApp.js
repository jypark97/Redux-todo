import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
// import the action creator for dispatch usage
import { addTodo, toggleTodo, deleteTodo } from '../actions/index';


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

let id=0;

let TodoApp =({ todos, addTodoClick, toggleTodoClick, deleteTodo }) => {
    var id= todos.length;
    return (
      <div>
        {/* leave this alone for now */}
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />
        {/* this.state.todos will not exist so we need to fix this */}
        <TodoList
          todos={todos}
          toggleTodo={(id) => toggleTodoClick(id)}
          deleteTodo={(id) => deleteTodo(id)}
        />
      </div>
    );
 }

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task));
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    }
  }
}


TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp)

export default TodoApp;
