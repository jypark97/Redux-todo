import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';

import actions from '../actions/index';

let id = 0;

let TodoApp = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <InputLine
        addTodo={(task) => addTodo(id++, task)}
      />
      <TodoList
        todos={todos}
        toggleTodo={(id) => toggleTodo(id)}
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
  // console.log(actions);
  return {
    addTodo: (id, task) => {
      dispatch(actions.addTodo(id, task))
    },
    toggleTodo: (id) => {
      dispatch(actions.toggleTodo(id))
    },
    deleteTodo: () => {
      dispatch(actions.deleteTodo(event))
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
