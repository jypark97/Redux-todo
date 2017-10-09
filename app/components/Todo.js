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

const Todo = ({id, task, completed, handleOnClick, removeTodoClick, display}) =>{
  console.log("completed", display);
  if(display === 'all'){
    return (
      <li key={id}>
        <span onClick={handleOnClick}>
          {completed ? <strike> {task}</strike> : task}
        </span>
        <button onClick={removeTodoClick}> Remove </button>
      </li>

    )
  }
  else if(display === 'completed'){
    if(completed){
      return (
        <li key={id}>
          <span onClick={handleOnClick}>
            {task}
          </span>
          <button onClick={removeTodoClick}> Remove </button>
        </li>

      )
    } else{
      return (
        <div>

        </div>
      )
    }

  } else{
    if(!completed){
      return (
        <li key={id}>
          <span onClick={handleOnClick}>
            {task}
          </span>
          <button onClick={removeTodoClick}> Remove </button>
        </li>

      )
    } else{
      return (
        <div>

        </div>
      )
    }
  }

}
export default Todo;
