import React from 'react';

let Todo = ({ task, completed, toggleTodo, removeTodo }) => {
  return (
    <div className="row">
      <div className="col-xs-6 col-xs-offset-2">
        <li className="list-group-item todo">
          <span onClick={() => toggleTodo()}>
            {completed ? <strike> {task} </strike> : task}
          </span>
        </li>
      </div>

      <div className="col-xs-2">
        <button className="btn btn-danger"
          onClick={() => removeTodo()}>
          X </button>
      </div>
    </div>
  );
}

export default Todo;
