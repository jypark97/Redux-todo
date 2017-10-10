import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

let id = 0;

let TodoApp = ( {todos, addTodoClick} ) => {
  return (
    <div>
      <TodoFilter />
      <InputLine
        addTodo={ (task) => addTodoClick(id++, task) }
        showAll={ () => showAllClick() }
        showCompleted={ () => showCompletedClick() }
        showUncompleted={ () => showUncompletedClick() }
      />
      <TodoList />
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state,
})

const mapDispatchToProps = (dispatch) => ({
  addTodoClick: (id, task) => {
    dispatch(addTodo(id, task));
  },
})

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp)

export default TodoApp;
