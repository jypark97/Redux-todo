import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';

import { addTodo, toggleTodo, deleteTodo} from '../actions/index';

let TodoApp = ({ todos, addTodoClick, toggleTodoClick, deleteTodo}) => {
  var id = todos.length;
  return (
    <div>
      <InputLine
        addTodo={(task) => addTodoClick(id, task)}
      />
      <TodoList
        todos={todos}
        toggleTodo={(id) => toggleTodoClick(id)}
        deleteTodo={(id) => deleteTodo(id)}
      />
    </div>
  );
}

const mapStateToProps = (state)=>({
  todos: state
});

var mapDispatchToProps = (dispatch)=>({
  addTodoClick: (id, task)=>{
    dispatch(addTodo(id,task));
  },
  toggleTodoClick: (id) =>{
    dispatch(toggleTodo(id));
  },
  deleteTodo: (id)=>{
    dispatch(deleteTodo(id));
  }
});

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);

export default TodoApp;
