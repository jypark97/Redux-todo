import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions/index';

let TodoList = ({todos, toggleTodoClick, removeTodoClick}) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={todo.id} task={todo.task} completed={todo.completed}
        toggleTodo={() => toggleTodoClick(index)}
        removeTodo={() => removeTodoClick(index)} />
      ))
    }
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodoClick: (id) => dispatch(toggleTodo(id)),
  removeTodoClick: (id) => dispatch(removeTodo(id))
})

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
