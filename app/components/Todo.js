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

const Todo = ({task, completed, handleOnClick, handleXClick}) => {
  return (
    <li>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      <button onClick={handleXClick}>X</button>
    </li>
  );
}

export default Todo;
