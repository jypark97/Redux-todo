import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';


let id = 0;

let TodoApp = ({ todos, addTodoClick }) => {
  return (
    <div>
      <InputLine
        addTodo={(text) => addTodoClick(id++, text)}
      />
      <TodoList
        todos={todos}
      />
      <div className="filterButtons">
        <button className="btn btn-success"> Only show completed tasks </button>
        <button className="btn btn-warning"> Only show incomplete tasks </button>
        <button className="btn btn-default"> Show all tasks </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoClick: (id, text) => (dispatch(addTodo(id, text))),
});

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
