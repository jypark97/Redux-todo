import React from 'react';

// class Todo extends React.Component {
const Todo = ({task, completed, toggleTodo, removeTodo}) => {

    return (
      <li>
        <span onClick={toggleTodo} onDoubleClick={removeTodo}>
          {completed ? <strike> {task}</strike> : task}
        </span>
      </li>
    );

}

export default Todo;
