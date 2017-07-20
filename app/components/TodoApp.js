import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo, toggleTodo, removeTodo, checkBox} from '../actions/index.js';

let id = 0;

const mapStateToProps = state => {
  return {
    todos: state['array'],
    isChecked: state['checked'],
    completedArray: state['completedArray']
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task));
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    removeTodoClick: (id) => {
      dispatch(removeTodo(id));
    },
    checkBox: () => {
      dispatch(checkBox());
    }
  }
}

let TodoApp = ({completedArray, todos, addTodoClick, toggleTodoClick, removeTodoClick, checkBox, isChecked}) => {
  return (
    <div>
      <label><input type="checkbox" name="checkbox" value={isChecked} onClick={checkBox}/>Completed</label>
      <InputLine
        addTodo={(text) => addTodoClick(id++, text)}
      />
      <TodoList
        todos={isChecked ? completedArray : todos}
        handleToggleTodo={(id) => toggleTodoClick(id)}
        handleRemoveTodo={(id) => removeTodoClick(id)}
      />
    </div>
  );
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
