import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {toggleTodo} from '../actions';
import {removeTodo} from '../actions';
import {displaySettings} from '../actions';
import {Link, Route, BrowserRouter} from 'react-router-dom';

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

        <BrowserRouter>
        <div>
        Show:
        <Link to="/all" onClick={() => this.props.displaySettings('all')} style={this.props.display === 'all' ? {color: 'black', marginRight: '5px', textDecoration: 'none'} : {color: 'blue', marginRight: '5px',}}> All, </Link>
        <Link onClick={() => this.props.displaySettings('not-completed')} to="/not-completed" style={this.props.display === 'not-completed' ? {color: 'black', marginRight: '5px', textDecoration: 'none'} : {color: 'blue', marginRight: '5px',}}> Active, </Link>
        <Link to="/completed" onClick={() => this.props.displaySettings('completed')} style={this.props.display === 'completed' ? {color: 'black', marginRight: '5px', textDecoration: 'none'} : {color: 'blue', marginRight: '5px',}}> Completed </Link>
        <Route exact path="/" render = {() =>         <TodoList
                todos={this.props.todos}
                handleToggleTodo = {(id) => this.props.toggleTodo(id)}
                handleRemoveTodo = {(id) => this.props.removeTodo(id)}
                displaySettings = 'all'
                />} />
          <Route exact path="/all" render = {() =>         <TodoList
                  todos={this.props.todos}
                  handleToggleTodo = {(id) => this.props.toggleTodo(id)}
                  handleRemoveTodo = {(id) => this.props.removeTodo(id)}
                  displaySettings = 'all'
                  />} />
          <Route exact path="/not-completed" render = {() =>         <TodoList
                  todos={this.props.todos}
                  handleToggleTodo = {(id) => this.props.toggleTodo(id)}
                  handleRemoveTodo = {(id) => this.props.removeTodo(id)}
                  displaySettings = 'not-completed'
                  />} />
          <Route exact path="/completed" render = {() =>         <TodoList
                  todos={this.props.todos}
                  handleToggleTodo = {(id) => this.props.toggleTodo(id)}
                  handleRemoveTodo = {(id) => this.props.removeTodo(id)}
                  displaySettings = 'completed'
                  />} />
                  </div>
        </BrowserRouter>


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
