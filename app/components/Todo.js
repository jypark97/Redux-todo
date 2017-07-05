import React from 'react';

// class Todo extends React.Component {
const Todo = ({task, completed, toggleTodo}) => {

    return (
      <li>
        <span onClick={toggleTodo}>
          {completed ? <strike> {task}</strike> : task}
        </span>
      </li>
    );

}

export default Todo;
