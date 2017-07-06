import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import Filter from './Filter'
import {connect} from 'react-redux';
import {addTodo,removeTodo,toggleTodo,showCompleted,showUncompleted} from '../actions/index';
//not export default, so need {} around the addTodo

let id = 0;

//have to change to let from const because overwriting below
// with connected TodoApp

let TodoApp =({ todos, addTodoClick, toggleTodoClick, removeTodoClick,showCompletedClick,showUncompletedClick}) => {
    return (
        <div>
        <InputLine
            addTodo={(text) => addTodoClick(id++, text)}
        />
        <Filter handleCompleted={()=>showCompletedClick()} handleUncompleted={()=>showUncompletedClick()}
        />
        <TodoList
            todos={this.props.todos}
            handleToggleTodo={(id) => toggleTodoClick(id)}
            handleRemoveTodo={(id) => removeTodoClick(id)}
        />
        </div>
    );
}

//same as below
let TodoApp =(props) => {
    return (
        <div>
        <InputLine
            addTodo={(text) => props.addTodoClick(id++, text)}
        />
        <Filter handleCompleted={()=>props.showCompletedClick()} handleUncompleted={()=>props.showUncompletedClick()}
        />
        <TodoList
            todos={props.todos}
            handleToggleTodo={(id) => props.toggleTodoClick(id)}
            handleRemoveTodo={(id) => props.removeTodoClick(id)}
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
    removeTodoClick: (id) => {
      dispatch(removeTodo(id))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    showCompletedClick: ()=>{
      dispatch(showCompleted())
    },
    showUncompletedClick: ()=>{
      dispatch(showUncompleted())
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

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

export default TodoApp;
