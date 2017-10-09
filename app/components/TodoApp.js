import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, filterNone, filterCompleteOnly, filterIncompleteOnly } from '../actions/index';


let id = 0;

let TodoApp = ({ todos, addTodoClick, allTasks, completeOnly, incompleteOnly }) => {
  return (
    <div>
      <InputLine
        addTodo={(text) => addTodoClick(id++, text)}
      />
      <TodoList
        todos={todos}
      />
      <div className="filterButtons">
        <button className="btn btn-success" onClick={ () => (completeOnly()) }> Only show completed tasks </button>
        <button className="btn btn-warning" onClick={ () => (incompleteOnly()) }> Only show incomplete tasks </button>
        <button className="btn btn-default" onClick={ () => (allTasks()) }> Show all tasks </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  let todosToRender = state.todos.slice();
  if(state.filter === "completeOnly") {
    todosToRender = todosToRender.filter( (todo) => (todo.completed) );
  } else if (state.filter === "incompleteOnly") {
    todosToRender = todosToRender.filter( (todo) => (!todo.completed) );
  }
  return { todos: todosToRender };
}

const mapDispatchToProps = (dispatch) => ({
  addTodoClick: (id, text) => (dispatch(addTodo(id, text))),
  allTasks: () => dispatch(filterNone()),
  completeOnly: () => dispatch(filterCompleteOnly()),
  incompleteOnly: () => dispatch(filterIncompleteOnly()),
});

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
