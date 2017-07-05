import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, toggle, remove, showAll, showCompleted, showNotCompleted } from '../actions/index';


let id = 0;

let TodoApp = ({todos, visibilityFilter, addTodoClick, toggleTodoClick, removeTodoClick, showAllClick, showCompletedClick, showNotCompletedClick}) => {
    return (
      <div>
        <button onClick={() => showAllClick()}>Show All</button>
        <button onClick={() => showCompletedClick()}>Show Completed</button>
        <button onClick={() => showNotCompletedClick()}>Show Unfinished</button>
        <InputLine
          addTodo={(task) => addTodoClick(todos.length, task)}
        />
        <TodoList
          todos={todos}
          visibilityFilter={visibilityFilter}
          toggleTodo={(id) => toggleTodoClick(id)}
          removeTodo={(id) => removeTodoClick(id)}
        />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
};
// allows you to access store.dispatch at a different level
const mapDispatchToProps = dispatch => (
    {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggle(id))
    },
    removeTodoClick: (id) => {
      dispatch(remove(id))
    },
    showAllClick: () => {
      dispatch(showAll())
    },
    showCompletedClick: () => {
      dispatch(showCompleted())
    },
    showNotCompletedClick: () => {
      dispatch(showNotCompleted())
    }
  }
)
// makes the connection to the store
TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)



export default TodoApp;
