import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

//****** ADDED ****
import {connect} from 'react-redux';
import {addTodo, toggleTodo, removeTodo} from '../actions/index.js';

let id = 0;

let TodoApp =({ todos, addTodoClick, toggleTodoClick, removeTodoClick }) => {
    return (
        <div>
        {/* leave this alone for now */}
        <InputLine
            addTodo={(text) => addTodoClick(id++, text)}
        />
        <TodoList
            todos={todos}
            toggleTodo={(id) => toggleTodoClick(id)}
            removeTodo={(id) => removeTodoClick(id)}
        />
        </div>
    );
}

//****** ADDED ****
const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, text) => {
      dispatch(addTodo(id,text));
    }
    ,
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
    ,
    removeTodoClick: (id) => {
      dispatch(removeTodo(id));
    }
  }
}

//****** ADDED ****
const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

//****** ADDED ****
TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);


export default TodoApp;
