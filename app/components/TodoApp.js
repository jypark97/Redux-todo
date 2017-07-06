import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, handleToggleTodo, handleRemoveTodo, handleFilterToggle } from '../actions/index'

let id = 0;
let showCompleted = false;

let TodoApp =({ todos, addTodoClick, toggleTodoClick, removeTodoClick, filterToggleClick}) => {
  return (
      <div>
      <InputLine
          addTodo={(text) => addTodoClick(id++, text)}
      />
      <button
        onClick={filterToggleClick}
      >Show Completed</button>
      <TodoList
          todos={todos}
          handleToggleTodo={(id) => toggleTodoClick(id)}
          handleRemoveTodo={(id) => removeTodoClick(id)}
      />
      </div>
  );
}

const mapStateToProps = (state) => {
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
      dispatch(handleToggleTodo(id))
    },
    removeTodoClick: (id) => {
      dispatch(handleRemoveTodo(id))
    },
    filterToggleClick: () => {
      showCompleted = !showCompleted;
      dispatch(handleFilterToggle(showCompleted))
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)


export default TodoApp;
