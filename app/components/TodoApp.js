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
import { showAll } from '../actions/index';
import { showCompleted } from '../actions/index';
import { showUncompleted } from '../actions/index';

let id = 0;

// have to change to let from const because overwriting below
// with connected TodoApp
let TodoApp =({ visibilityFilter, todos, addTodoClick, toggleTodo, removeTodo, showAll, showCompleted, showUncompleted }) => {
  return (
      <div>
        <InputLine
            addTodo={(task) => addTodoClick(id++, task)}
        />
        <TodoList
            visibilityFilter={visibilityFilter}
            todos={todos}
            toggleTodo={(id) => toggleTodo(id)}
            removeTodo={(id) => removeTodo(id)}
        />
        <button type="button" onClick={() => showAll()}>Show all</button>
        <button type="button" onClick={() => showCompleted()}>Show Completed</button>
        <button type="button" onClick={() => showUncompleted()}>Show Uncompleted</button>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
    showAll: () => {
      dispatch(showAll())
    },
    showCompleted: () => {
      dispatch(showCompleted())
    },
    showUncompleted: () => {
      dispatch(showUncompleted())
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
