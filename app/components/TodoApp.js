import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import {toggleTodo} from '../actions/index';
import {removeTodo} from '../actions/index';

let id = 0;
// let displayOption = 1;
let display = [];
//
// const optionHandler = (optionNum)=>{
//   displayOption = optionNum;
//   filterHandler(optionNum)
// }

const optionHandler = (optionNum,todos=[]) => {
  switch (optionNum){
    case 1:
      display= todos
    case 2:
      display= todos.map((item)=>(item.completed===true))
    case 3:
      display= todos.map((item)=>(item.completed===false))
    default:
      display= todos
  }
}

let TodoApp = ({todos,addTodoClick,toggleTodoClick,removeTodoClick})=>(
  <div className="container">
    <h2>Redux Todo App!!</h2>
    <div className="section">
      <InputLine
        addTodo={(task)=>addTodoClick(id++,task)}
      />
    </div>
      <a className='dropdown-button btn' data-activates='dropdown1'>Filter</a>
      <ul id='dropdown1' className='dropdown-content'>
        <li><a onClick={()=>optionHandler(1,todos)}>All</a></li>
        <li><a onClick={()=>optionHandler(2,todos)}>Done</a></li>
        <li><a onClick={()=>optionHandler(3,todos)}>Active</a></li>
      </ul>
    <div className="section">
    <TodoList
      todos={todos}
      handleRemoveTodo={(id)=>removeTodoClick(id)}
      handleToggleTodo={(id)=>toggleTodoClick(id)}
    />
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoClick: (id,task)=>{
    dispatch(addTodo(id,task))
  },
  toggleTodoClick: (id)=>{
    dispatch(toggleTodo(id))
  },
  removeTodoClick: (id)=>{
    dispatch(removeTodo(id))
  }
})

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp)

export default TodoApp;
