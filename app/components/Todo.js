import React from 'react';

// class Todo extends React.Component {
const Todo = ({task, completed, toggleTodo, removeTodo}) => {

    return (
      <li>
        <button className="btn removebtn" onClick={removeTodo}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <span className="todotext" onClick={toggleTodo}>
          {completed ? <strike> {task}</strike> : task}
        </span>
      </li>
    );

}

export default Todo;
