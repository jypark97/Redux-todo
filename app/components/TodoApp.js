import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index'
import {toggleTodo, removeTodo} from '../actions/index'

let id = 0;

let TodoApp =({todos, addTodoClick, toggleTodoClick,removeTodoClick}) => {
    return (
      <div>
        {}
        <InputLine
          addTodo={(task) => addTodoClick(id++,task)}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={(id) => toggleTodoClick(id)}
          handleRemoveTodo= {(id) => removeTodoClick(id)}
        />
      </div>
    );
}

const mapStateToProps = (state) =>{
  return{
    todos:state.todos,
    filtered:state.filtered
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addTodoClick: (id,task) =>{
      dispatch(addTodo(id,task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodoClick: (id) =>{
      dispatch(removeTodo(id))
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);


export default TodoApp;
