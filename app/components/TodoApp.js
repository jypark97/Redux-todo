import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoclick}) => {
    return (
      <div>
        <InputLine
          addTodo={(text) => addTodoClick(id++, text)}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={id => this.toggleTodo(id)}
        />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task));
    }
  };
};

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
