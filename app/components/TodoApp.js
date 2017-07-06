import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
// import connect to connect TodoApp to the
// resources it needs from redux store (which
// is available because the app is wrapped
// by <Provider> in app.js
import { connect } from 'react-redux';
// import the action creator for dispatch usage
import { addTodo, toggleTodo, deleteTodo } from '../actions/index';

let id = 0;

// have to change to let from const because overwriting below
// with connected TodoApp
let TodoApp =({ todos, addTodoClick, toggleTodoClick, deleteTodoClick  }) => {
  return (
      <div>
        <InputLine
            addTodo={(task) => addTodoClick(id++, task)}
        />
        <TodoList
            todos={todos}

            toggleTodo={(id) => toggleTodoClick(id)}
            deleteTodo={(id) => deleteTodoClick(id)}

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
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    deleteTodoClick: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
