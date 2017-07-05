import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/index';

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
            toggleTodo={(id) => toggleTodoClick(id)}
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
    toggleTodoClick: (id) => {
      console.log('mapDispatchToProps triggered')
      dispatch(toggleTodo(id))
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
