import React from 'react';

const Todo = ({task, completed, display, handleOnClick, handleRemove}) => {
	
	var displayStyle;
	if (display) {
		displayStyle = {
			display: 'block',
		}
	}
	else {
		displayStyle = {
			display: 'none'
		}
	}
  return (
    <li style={displayStyle}>
    	<button 
          onClick={handleRemove}
      >x</button>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task}</strike> : task}
      </span>
    </li>
  );
}

export default Todo;
