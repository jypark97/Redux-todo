import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, deleteTodo, showAll, showComplete, showUncomplete } from '../actions/index';

let id = 0;

let TodoApp = ({ todos, filterFunction, addTodoClick, toggleTodoClick, deleteTodoClick, showAllClick, showCompleteClick, showUncompleteClick }) => {

  return (
    <div>
      <InputLine
        addTodo={(text) => addTodoClick(id++, text)}
      />
      <TodoList
        todos={todos}
        filterFunction={filterFunction}
        handleToggleTodo={(id) => toggleTodoClick(id)}
        handleDeleteTodo={(id) => deleteTodoClick(id)}
      />
      <FilterButtons
        showAll={() => showAllClick()}
        showComplete={() => showCompleteClick()}
        showUncomplete={() => showUncompleteClick()}

      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filterFunction: state.filterFunction
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => dispatch(addTodo(id, task)),
    toggleTodoClick: (id) => dispatch(toggleTodo(id)),
    deleteTodoClick: (id) => dispatch(deleteTodo(id)),
    showAllClick: () => dispatch(showAll()),
    showCompleteClick: () => dispatch(showComplete()),
    showUncompleteClick: () => dispatch(showUncomplete())
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
