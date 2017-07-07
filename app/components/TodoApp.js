import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
// import connect to connect TodoApp to the
// resources it needs from redux store (which
// is available because the app is wrapped
// by <Provider> in app.js
import { connect } from 'react-redux';
// import the action creator for dispatch usage
import { addTodo, toggleTodo, removeTodo, show } from '../actions/index';

let id = 0;

let TodoApp =({ todos, addTodoClick, toggleTodoClick, removeTodoClick, showClick}) => {
    return (
        <div>
        <InputLine
            addTodo={(text) => addTodoClick(id++, text)}
        />
        <TodoList
            todos={todos}
            handleToggleTodo={(id) => toggleTodoClick(id)}
            handleRemoveTodo={(id) => removeTodoClick(id)}
        />
        <button className="btn btn-success" id="completed" onClick={() => showClick('completed')}> Show Completed </button>
        <button className="btn btn-danger" id ="not_completed" onClick={() => showClick('not completed')}> Show Not Completed </button>
        <button className="btn btn-warning" id ="all" onClick={() => showClick('all')}> Show All </button>
        </div>
    );
}

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  addTodoClick: (id, task) => {
    dispatch(addTodo(id, task));
  },
  toggleTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
  removeTodoClick: (id) => {
    dispatch(removeTodo(id));
  },
  showClick: (filter) => {
    dispatch(show(filter));
  }
});

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
