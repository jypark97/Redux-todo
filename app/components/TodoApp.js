import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { addTodo, toggleTodo, removeTodo } from '../actions/index';
import { connect } from 'react-redux';

let id = 0;

let TodoApp = ({todos, addTodo, toggleTodo, removeTodo}) => {
  return (
      <div>
        <InputLine
          addTodo={(task) => addTodo(id++, task)}
        />
        <TodoList
          todos={todos}
          toggleTodo={(index) => toggleTodo(index)}
          removeTodo={(index) => removeTodo(index)}
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
    addTodo: (id, task) => {dispatch(addTodo(id, task))},
    toggleTodo: (id) => {dispatch(toggleTodo(id))},
    removeTodo: (id) => {dispatch(removeTodo(id))}
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp)

export default TodoApp;
