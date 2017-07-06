import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';
import { toggleToDo } from '../actions/index';
import { removeToDo } from '../actions/index';


let id = 0;


let TodoApp = ({ todos, addTodoClick, toggleTodoClick, removeTodoClick }) => {
    return (
      <div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={(id) => toggleTodoClick(id)}
          removeToggleTodo={(id) => removeTodoClick(id)}
        />
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addToDo(id,task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleToDo(id))
    },
    removeTodoClick: (id) => {
      dispatch(removeToDo(id))
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
