import React from 'react';

// class Todo extends React.Component {
//   render() {
//     return (
//       <li>
//         <span onClick={() => this.props.toggleTodo()}>
//           {this.props.completed ? <strike> {this.props.task}</strike> : this.props.task}
//         </span>
//       </li>
//     );
//   }
// }

const Todo = ({task, completed, toggleTodo, deleteTodo}) => {
  return (
    <li>
      <span onClick={toggleTodo} onDoubleClick={deleteTodo} onKeyDown={deleteTodo}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      <span onClick={deleteTodo}>
        <button>X</button>
      </span>
    </li>
  );
}

export default Todo;
