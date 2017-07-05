import React from 'react';

const Todo = ({task,completed,handleOnClick, handleOnDouble})=> {

    return (
      <li>
        <span onClick={handleOnClick}
              onDoubleClick={handleOnDouble}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      </li>
    );

}

export default Todo;
