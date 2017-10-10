import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'

let TodoList = ({todos}) => {
  return (
    <ul>
      { todos
        .map( (todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          task={todo.task}
          completed={todo.completed}
          display={todo.display}
          id={todo.id}
        />
      ) ) }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  todos: state,
})

// const mapDispatchToProps = (dispatch) => ({
//
// })

TodoList = connect(mapStateToProps, null)(TodoList)

export default TodoList;
