import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/index';

let TodoList = ({ todos, toggleTodoClick, removeTodoClick }) =>  {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleOnClick={() => toggleTodoClick(todo.id)}
            handleOnDoubleClick={() => removeTodoClick(todo.id)}
          />
        ))
      }
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    removeTodoClick: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

TodoList = connect(() => ({}), mapDispatchToProps)(TodoList)

export default TodoList;
