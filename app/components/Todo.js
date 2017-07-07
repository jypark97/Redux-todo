import React from 'react';

const Todo = ({task, completed, handleOnClick, xClick}) => {
    return (
      <li>
        <button className="btn btn-outline-info btn-sm"onClick={() => xClick()}> X </button>
        <span style={{color: "#5bc0de"}} onClick={() => handleOnClick()}>
          {completed ? <strike> {task}</strike> : task}
        </span>
      </li>
    );
}

export default Todo;
