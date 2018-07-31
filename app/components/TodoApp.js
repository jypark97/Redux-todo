import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, showAll} from '../actions/index'

let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoClick, deleteTodoClick, showAllClick}) => {
  return (
    <div>
      <InputLine
        addTodo={(task) => addTodoClick(id++, task)}
      />
      <TodoList
        todos={todos}
        handleToggleTodo={(id) => toggleTodoClick(id)}
        handleDelete = {(id) => deleteTodoClick(id)}
      />
      <label>Filter by: </label>
      <button onClick={() => {}}>Completed</button>
      <button onClick={() => {}}>Incomplete</button>
      <button onClick={() => {}}>Show all</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id,task))
    },
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    deleteTodoClick: (id) => {
      dispatch(deleteTodo(id))
    },
    showAllClick: () => {
      dispatch(showAll())
    }
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp)

export default TodoApp;
