import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, toggle, remove, filter } from '../actions/index';

let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoClick, 
  removeTodoClick, filterTodoClick}) => {
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
      <button onClick={() => filterTodoClick(true)}>Completed Tasks</button>
      <button onClick={() => filterTodoClick(false)}>In Progress Tasks</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  }
};

const mapDispatchToProps = dispatch => {
  return { 
    addTodoClick: (id, task) => {dispatch(addTodo(id, task));},
    toggleTodoClick: id => {dispatch(toggle(id))},
    removeTodoClick: id => {dispatch(remove(id))},
    filterTodoClick: completed => {dispatch(filter(completed))}
  };
};

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);


export default TodoApp;
