import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { addTodo, handleToggleTodo, handleDeleteTodo, removeCompletedTasks} from '../actions/index';

let id = 0;

let TodoApp = ({todos, addTodoClick, toggleTodoClick, deleteTodoClick, removeCompleteClick}) => {
    return (
      <div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />

        <TodoList
          todos={todos}
          handleToggleTodo={(id) => toggleTodoClick(id)}
          handleDeleteTodo={(id) => deleteTodoClick(id)}
          removeComplete={() => removeCompleteClick()}
        />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },

    toggleTodoClick: (id) => {
      dispatch(handleToggleTodo(id))
    },

    deleteTodoClick: (id) => {
      dispatch(handleDeleteTodo(id))
    },

    removeCompleteClick: () => {
      dispatch(removeCompletedTasks())
    }

  }
}

TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
