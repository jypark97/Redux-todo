import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions/index';

// let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoClick}) => (
  <div>
    <InputLine
      addTodo={(task) => addTodoClick(todos.length, task)}
    />
    <TodoList
      todos={todos}
      toggleTodo={(index) => toggleTodoClick(index)}
    />
  </div>
);

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = (dispatch) => ({
  addTodoClick: (id, task) => dispatch(addTodo(id, task)),
  toggleTodoClick: (id) => dispatch(toggleTodo(id))
});

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
