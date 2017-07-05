import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
// import connect to connect TodoApp to the
// resources it needs from redux store (which
// is available because the app is wrapped
// by <Provider> in app.js
import { connect } from 'react-redux';
// import the action creator for dispatch usage
import { addTodo } from '../actions/index';

import { toggleTodo } from '../actions/index';

import { removeTodo } from '../actions/index';

import { toggleFilter } from '../actions/index';


let id = 0;

// have to change to let from const because overwriting below
// with connected TodoApp
let TodoApp =({ todos, filter, addTodoClick, toggleTodoClick, removeTodoClick, toggleFilterClick }) => {
  return (
      <div>
        <InputLine
            addTodo={(task) => addTodoClick(id++, task)}
        />
      <button onClick = {(id) => toggleFilterClick(id)} > Filter</button>
        <TodoList
          todos = {filter ? todos.filter(function(x){
            return x.completed
          }): todos }
          //  todos={todos}
            toggleTodo={(id) => toggleTodoClick(id)}
            removeTodo ={(id) => removeTodoClick(id)}
        />
      </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.arr,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodoClick:(id) =>{
      dispatch(removeTodo(id))
    },
    toggleFilterClick:(id) =>{
      dispatch( toggleFilter(id))
    }

  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
