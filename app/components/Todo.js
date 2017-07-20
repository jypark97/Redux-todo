import React from 'react';

const Todo = ({toggleTodo, removeTodo, completed, task}) => {
  return (
    <li>
      <button onClick={removeTodo}>X</button>
      <span onClick={toggleTodo}>
        {completed ? <strike> {task}</strike> : task}
      </span>
    </li>
  );
}

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

export default Todo;
