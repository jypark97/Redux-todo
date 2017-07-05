import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import {ButtonGroup, Button, MenuItem, DropdownButton } from 'react-bootstrap';

import { addTodo, toggleTodo, removeTodo, filterTodo } from '../actions/index.js';
import { connect } from 'react-redux';

let id = 0;

// class TodoApp extends React.Component {
let TodoApp = ({todos,currentFilter, addTodoClick, toggleTodoClick, removeTodoClick, filterTodoClick}) => {

    return (
      <div className="tododiv">
        <div className="lines"></div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />

        <ButtonGroup style={{alignSelf: "flex-end", paddingRight: "5px"}}>

          <DropdownButton title={"Filter by: "+currentFilter} id="bg-nested-dropdown">
            <MenuItem eventKey="1" onClick={() =>
              {
                console.log(currentFilter);

                return filterTodoClick("Complete");
              }
            }>
            Complete</MenuItem>
            <MenuItem eventKey="2" onClick={() => filterTodoClick("Incomplete")}>Incomplete</MenuItem>
            <MenuItem eventKey="3" onClick={() => filterTodoClick("All")}>All</MenuItem>
          </DropdownButton>
        </ButtonGroup>

        
        <TodoList
          todos={todos}


          toggleTodo={(id) => toggleTodoClick(id)}
          removeTodo={(id) => removeTodoClick(id)}
        />
      </div>
    );

}

const mapStateToProps = (state) => {
  return {
    todos: state,
    currentFilter: "All"
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
    },
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
