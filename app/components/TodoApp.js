import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {toggleTodo} from '../actions';
import {removeTodo} from '../actions';
let id = 0;

class TodoApp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <InputLine
          addTodo={(task) => this.props.addTodo(task, id++)}
        />

        <TodoList
        todos={this.props.todos}
        handleToggleTodo = {(id) => this.props.toggleTodo(id)}
        handleRemoveTodo = {(id) => this.props.removeTodo(id)}
        />
      </div>
    );
  }
}

// const mapStateToProps = () => {
//   return {
//
//   }
// }
const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (id, task) => dispatch(addTodo(id, task)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
