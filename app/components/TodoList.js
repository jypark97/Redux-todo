import React from 'react';

// import connect to connect TodoApp to the
// resources it needs from redux store (which
// is available because the app is wrapped
// by <Provider> in app.js
import { connect } from 'react-redux';

import { toggleTodo } from '../actions/index';
import { removeTodo } from '../actions/index';

import Todo from '../components/Todo';

let TodoList = ({todos, handleToggleTodo, handleRemoveTodo}) => {
    function renderList() {
        return todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by id's instead of index
            handleOnClick={() => handleToggleTodo(todo.id)}
            handleRemoveClick={() => handleRemoveTodo(todo.id)}
          />
      ));
  };

    return (
      <ul className="list-group col-sm-4">
            {renderList()}
      </ul>
    )
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          handleToggleTodo: (id, task) => {
            dispatch(toggleTodo(id, task))
        },
          handleRemoveTodo: (id, task) => {
            dispatch(removeTodo(id, task))
          }
        }
  }

  // Promote TodoList from a component to a container- it needs to know
  // about this new dispatch methods, addTodo, removeTodo, and toggleTodo
  // Make them available as props
  TodoList = connect(null, mapDispatchToProps)(TodoList);

  export default TodoList;
