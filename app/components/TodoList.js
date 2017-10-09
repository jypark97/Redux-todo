import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/index';

let TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className="container">
      <ul className="list-group">
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              // Find todo to toggle by
              toggleTodo={() => toggleTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
            />
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => (dispatch(toggleTodo(id))),
  removeTodo: (id) => (dispatch(removeTodo(id))),
});

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
