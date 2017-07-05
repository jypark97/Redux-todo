import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
// import connect to connect TodoApp to the
// resources it needs from redux store (which
// is available because the app is wrapped
// by <Provider> in app.js
import { connect } from 'react-redux';
// import the action creator for dispatch usage
import { addTodo } from '../actions/index';
import { toggleTodo } from '../actions/index';
import { removeTodo } from '../actions/index';
import { filterTodos } from '../actions/index';

let id = 0;






let TodoApp =({ todos, filter, addTodoClick, toggleTodoClick, removeTodoClick, clickFilterTodos }) => {
  let newTodos = [...todos];
  console.log(newTodos);
  if (filter && todos){
    newTodos = newTodos.filter((item)=>{
      if (item.completed){
        return item
      }
    })
  };
  return (
      <div>
        <InputLine
            addTodo={(task) => addTodoClick(id++, task)}
        />
        <button onClick={()=> clickFilterTodos()}>{filter ? 'Unfilter' : 'Filter'}</button>
        <TodoList
            todos={newTodos}
            toggleTodo={(id) => toggleTodoClick(id)}
            removeTodo={(id) => removeTodoClick(id)}
        />
      </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) =>{
      dispatch(toggleTodo(id))
    },
    removeTodoClick: (id) =>{
      dispatch(removeTodo(id))
    },
    clickFilterTodos: () =>{
      dispatch(filterTodos())
    }
  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
