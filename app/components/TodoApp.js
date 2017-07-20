import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo } from '../actions/index';


let id = 0;

let TodoApp =({ todos, addTodoClick, toggleTodoClick }) => {
  return (
    <div>
      <InputLine
        addTodo={(task) => addTodoClick(id++, task)}
      />
      <TodoList
        todos={todos}
        handleToggleTodo={(id) => toggleTodoClick(id)}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {dispatch(addTodo(id, task))}
  }
}

TodoApp = connect(
  mapStateToProps, mapDispatchToProps
)(TodoApp);

export default TodoApp;
