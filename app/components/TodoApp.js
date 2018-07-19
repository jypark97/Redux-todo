import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { handleToggleTodo} from '../actions/index'
import { handleRemove } from '../actions/index'
import { filterTodos } from '../actions/index'

let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoClick, removeClick, filterTodos}) => {
    return (
      <div>
        <select onChange={(e) => filterTodos(e)}>
          <option value="all">All</option>
          <option value="true">Completed</option>
          <option value="false">Uncompleted</option>
        </select>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={(id) => toggleTodoClick(id)}
          handleRemove={(id) => removeClick(id)}
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
    addTodoClick: (id, task) => { dispatch(addTodo(id, task)) },
    toggleTodoClick: (id) => { dispatch(handleToggleTodo(id)) },
    removeClick: (id) => { dispatch(handleRemove(id)) },
    filterTodos: (e) => { dispatch(filterTodos(e)) }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

export default TodoApp;
