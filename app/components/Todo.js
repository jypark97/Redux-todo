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
//



const Todo = ({task, completed, toggleTodo, removeTodo}) => {
  return(
    <li>
      <span onClick = {toggleTodo}>
        {completed ? <strike> {task} </strike>: task}
      </span>
      <span onClick = {removeTodo}>
              x
      </span>
    </li>
  );
};

export default Todo;
