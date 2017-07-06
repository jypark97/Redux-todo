import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, showAll, showCompleted, showUncompleted, filterByText } from '../actions/index';

let id = 0;


const destructedProps = { todos, addTodoClick, toggleTodoClick, deleteTodoClick, showAllClick, showCompletedClick, showUncompletedClick, filterByTextClick}

let TodoApp = (destructedProps) => {
  return (
    <div>
      <InputLine
        addTodo={(text) => addTodoClick(id++, text)}
      />
      <TodoList
        todos={todos}
        handleToggleTodo={(id) => toggleTodoClick(id)}
        handleDeleteTodo={(id) => deleteTodoClick(id)}
      />
      <FilterButtons
        showAll={() => showAllClick()}
        showCompleted={() => showCompletedClick()}
        showUncompleted={() => showUncompletedClick()}
      />
      <FilterBox
        submit={(filterText) => filterByTextClick(filterText)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos,
    displayedTodos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => dispatch(addTodo(id, task)),
    toggleTodoClick: (id) => dispatch(toggleTodo(id)),
    deleteTodoClick: (id) => dispatch(deleteTodo(id)),
    showAllClick: () => dispatch(showAll()),
    showCompletedClick: () => dispatch(showCompleted()),
    showUncompletedClick: () => dispatch(showUncompleted()),
    filterByTextClick: (filterText) => dispatch(filterByText(filterText))
  }
}


TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
