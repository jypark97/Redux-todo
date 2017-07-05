import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import {toggleTodo} from '../actions/index';

let id = 0;

let TodoApp =({ todos, addTodoClick, toggleTodoClick }) => {
    return (
        <div>
        {/* leave this alone for now */}
        <InputLine
            addTodo={(task) => addTodoClick(id++, task)}
        />
        <TodoList
            todos={todos}
            handleToggleTodo={(id) => toggleTodoClick(id)}
        />
        </div>
    );
}

const mapStateToProps = (state)=> {
  return {
    todos:state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick:(id) => {
      dispatch(toggleTodo(id))
    }
  }
}

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);

export default TodoApp;

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
