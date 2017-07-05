import React from 'react';

// class Todo extends React.Component {
const Todo = ({task, display, completed, toggleTodo, removeTodo}) => {
  if(display){
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
  }else{
    return (null);
  }

}

export default Todo;
