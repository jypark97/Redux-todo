import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';


let id = 0;


let TodoApp = ({ todos, addTodoClick, toggleTodoClick }) => {
    return (
      <div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, text)}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={(id) => toggleTodoClick(id)}
        />
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addToDo(id,task))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
