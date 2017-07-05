import React from 'react';

const Todo = ({task, completed, toggleTodo, removeTodo}) => {
  return (
    <li>
      <button onClick={removeTodo}> x </button>
      <span onClick={toggleTodo}>
        {completed ? <strike> {task} </strike> : task}
      </span>
    </li>
  );
}

export default Todo;



//initial

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
