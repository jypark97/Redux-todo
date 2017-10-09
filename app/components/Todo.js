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

const Todo = ({id, task, completed, handleOnClick, removeTodoClick}) =>{
  console.log("completed", completed);
  return (
    <li key={id}>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task}</strike> : task}
      </span>
      <button onClick={removeTodoClick}> Remove </button>
    </li>

  )
}
export default Todo;
