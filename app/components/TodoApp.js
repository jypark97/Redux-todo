import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { toggleTodo } from '../actions/index1';
import { removeTodo } from '../actions/index2';

let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoClick, doubleClick }) => {
    return (
      <div>
        <InputLine
          addTodo={(text) => addTodoClick(id++, text)}
        />
        <TodoList
          todos={todos}
            handleToggleTodo={(id) => toggleTodoClick(id)}
            removeTodo={(id) => doubleClick(id)}
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
    addTodoClick: (id,task) => {
      dispatch (addTodo(id,task))
    },
    toggleTodoClick: (id) => {
      dispatch (toggleTodo(id))
    },
    doubleClick: (id) => {
      dispatch (removeTodo(id))
    },
  }
}

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);

export default TodoApp;
