import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { toggleTodo } from '../actions/index1';
import { removeTodo } from '../actions/index2';

let id = 0;

function filterCom (todos) {
  return todos.filter((item) => {
    return item.completed === true;
  })
}
function filterUn (todos) {
  return todos.filter((item) => {
    return item.completed !== true;
  })
}

let TodoApp = ({addTodoClick, toggleTodoClick, todos, doubleClick, filter, filterCompleted,filterUncompleted}) => {
  let list = todos.slice();
  if(filter === true) {
    // console.log(1);
    list = filterCom(todos);
  }
  if(filter === false) { /// question
    // console.log(2);
    list = filterUn(todos);
  }
  // console.log(list);
    return (
      <div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />

        <div>
          <button onClick={filterCompleted}>All Completed</button>
          <button onClick={filterUncompleted}>All Uncompleted</button>
        </div>

        <TodoList
          todos={list}
          handleToggleTodo={(id) => toggleTodoClick(id)}
          removeTodo={(id) => doubleClick(id)}
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
    addTodoClick: (id,task) => {
      dispatch (addTodo(id,task))
    },
    toggleTodoClick: (id) => {
      dispatch (toggleTodo(id))
    },
    doubleClick: (id) => {
      dispatch (removeTodo(id))
    },
    filterCompleted: () => {
      dispatch({type: 'COMPLETED'})
    },
    filterUncompleted: () => {
      dispatch({type: 'UNCOMPLETED'})
    }
  }
}

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);

export default TodoApp;
