import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { addTodo, toggleTodo, removeTodo } from '../actions/index.js';
import { connect } from 'react-redux';

let id = 0;

// class TodoApp extends React.Component {
let TodoApp = ({todos, addTodoClick, toggleTodoClick, removeTodoClick}) => {

    return (
      <div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />

        <TodoList
          todos={todos}
          toggleTodo={(id) => toggleTodoClick(id)}
          removeTodo={(id) => removeTodoClick(id)}
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
    addTodoClick: (id,task) => {
      dispatch(addTodo(id,task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodoClick: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
