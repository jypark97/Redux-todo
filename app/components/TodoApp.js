import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { addTodo } from '../actions/index'
import { clickTodo } from '../actions/index'
import { connect } from 'react-redux'

import { Provider } from 'react-redux';

let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoClick}) => {
  console.log(todos);
  return (
    <div>
      <InputLine
        addTodo={(task) => addTodoClick(id++, task)}
      />
      <TodoList
        todos={todos}
        handleClick={(id) => toggleTodoClick(id)}
      />
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(clickTodo(id))
    }
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp)

export default TodoApp;
