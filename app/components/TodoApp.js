import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { addTodoAction, toggleTodoAction, removeTodoAction } from '../actions/index';
import { connect } from 'react-redux';


let id = 0;

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoAction: (id, task) => dispatch(addTodoAction(id, task)),
    toggleTodoAction: (id) => dispatch(toggleTodoAction(id)),
    removeTodoAction: (id) => dispatch(removeTodoAction(id))
  }
}

let TodoApp = ({todos, addTodoAction, toggleTodoAction, removeTodoAction}) => {
    return (
      <div>
        <InputLine
          addTodo={(task) => addTodoAction(id++, task)}
        />
        <TodoList
          todos={todos}
          toggleTodo={(id) => toggleTodoAction(id)}
          removeTodo={(id) => removeTodoAction(id)}
        />
      </div>
    );
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
