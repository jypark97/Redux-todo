import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { addTodo, toggleTodo, removeTodo, filterTodo } from '../actions/index.js';
import { connect } from 'react-redux';

let id = 0;

// class TodoApp extends React.Component {
let TodoApp = ({todos, addTodoClick, toggleTodoClick, removeTodoClick, filterTodoClick}) => {

    return (
      <div className="tododiv">
        <div className="lines"></div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />
        <button className="btn" onClick={() => filterTodoClick("all")}>Show all</button>
        <button className="btn" onClick={() => filterTodoClick("incomplete")}>Filter by Incomplete</button>
        <button className="btn" onClick={() => filterTodoClick("complete")}>Filter by Completed</button>
        <TodoList
          todos={todos}

          filterTodo = {(filterby) => filterTodoClick(filterby)}
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
    },
    filterTodoClick: (filterby) => {
      dispatch(filterTodo(filterby))
    }
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
