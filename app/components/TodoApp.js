import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo } from './actions/index';
import { crossTodo } from './actions/index';
import { removeTodo } from './actions/index';
import {bindActionCreators} from 'redux';
let id = 0;

let TodoApp =({ todos, addTodoClick, toggleTodoClick, handleRemove }) => {
  console.log('todoapp', todos)
    return (
        <div>
        {/* leave this alone for now */}
        <InputLine
            addTodo={(text) => addTodoClick(id++, text)}
        />
        <TodoList
            todos={todos}
            handleToggleTodo={(id) => toggleTodoClick(id)}
            handleRemove={(id) => handleRemove(id)}
        />
        </div>
    );
}

function mapStateToProps(state){
  return{
    todos: state
  }
}

function mapDispatchToProps(dispatch){
  return {
    addTodoClick: (id, task) =>{
      dispatch(addTodo(id, task)) //pass value back to reducers
    },
    toggleTodoClick:(id) =>{
      dispatch(crossTodo(id))
    },
    handleRemove:(id) =>{
      dispatch(removeTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
