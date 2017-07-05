import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, filterByCompleted, showAll } from '../actions/index';


let id = 0;

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

let TodoApp =({ todos, addTodoClick, toggleTodoClick, deleteTodoClick, onThisId, filterBy, filterByCompleted, showAll }) => {
    return (
        <div>
        {/* leave this alone for now */}
        <InputLine
            addTodo={(text) => addTodoClick(id++, text)}
        />
        <span onClick={() => filterByCompleted()}><button> show completed </button></span>
        <span onClick={() => showAll()}><button> show all </button></span>
        <TodoList
            todos={todos}
            toggleTodo={(id) => toggleTodoClick(id)}
            deleteTodo={(id) => deleteTodoClick(id)}
            filterBy={filterBy}
        />
        </div>
    );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filterBy: state.filterBy
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    deleteTodoClick: (id) => {
      dispatch(deleteTodo(id));
    },
    filterByCompleted: () => {
      dispatch(filterByCompleted());
    },
    showAll: () => {
      dispatch(showAll());
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);


export default TodoApp;
