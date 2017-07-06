import React from 'react';

const Todo = ({task,completed,handleOnClick,handleRemoveClick})=>(
  // <li className="collection-item">
    <a className="collection-item">
      <h4>
        <div onClick={handleRemoveClick}  className="btn-floating btn-small waves-effect waves-light red">
          <i className="small material-icons">delete</i>
        </div>
        &nbsp;
        <strong onClick={handleOnClick}>
          {completed ? <strike> {task}</strike> : task}
        </strong>
      </h4>
    </a>
  // </li>
)


export default Todo;
