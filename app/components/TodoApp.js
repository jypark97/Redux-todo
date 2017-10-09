import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {toggleTodo} from '../actions';
import {removeTodo} from '../actions';
import {displaySettings} from '../actions'
let id = 0;

class TodoApp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.display);
    return (
      <div>
        <InputLine
          addTodo={(task) => this.props.addTodo(task, id++)}
          displaySettings={(display) => this.props.displaySettings(display)}
        />

        <TodoList
        todos={this.props.todos}
        handleToggleTodo = {(id) => this.props.toggleTodo(id)}
        handleRemoveTodo = {(id) => this.props.removeTodo(id)}
        displaySettings = {this.props.display}
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
    todos: state.todos,
    display: state.display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (id, task) => dispatch(addTodo(id, task)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    displaySettings: (display) => dispatch(displaySettings(display))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
