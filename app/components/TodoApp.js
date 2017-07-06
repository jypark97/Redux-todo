import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import {toggleTodo} from '../actions/index';
import {removeTodo} from '../actions/index';
import {filterTodos} from '../actions/index';

let id = 0;

let TodoApp = ({todos, filter, addTodoClick, toggleTodoClick, removeTodo, toggleFilter}) => {
  return (
    <div>
      <button onClick={(filter) => toggleFilter(filter)}>Show uncompleted tasks</button>
      <InputLine
        addTodo={(text) => addTodoClick(id++, text)} // dispatches todo action
      />
      <TodoList
        todos={todos}
        filter={filter}
        handleToggleTodo={(id) => toggleTodoClick(id)}
        handleRemove={(id) => removeTodo(id)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
    toggleFilter: () => {
      dispatch(filterTodos())
    }
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
