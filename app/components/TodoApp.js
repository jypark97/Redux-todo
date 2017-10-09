import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

let TodoApp = ({todos, addTodoClick}) => (
  <div>
    <InputLine addTodo={(task) => addTodoClick(todos.length, task)} />
    <TodoList todos={todos} />
  </div>
);

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = (dispatch) => ({
  addTodoClick: (id, task) => dispatch(addTodo(id, task))
});

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
