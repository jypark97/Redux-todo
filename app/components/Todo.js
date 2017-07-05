// import React from 'react';
//
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
// export default Todo;

import React from 'react';

const Todo = ({task, completed, handleOnClick}) => {
  return (
    <li>
      <span onClick={handleOnClick}>
        {completed ? <strike> {task} </strike> : task}
      </span>
    </li>
  );
}

export default Todo;
