import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, handleToggleTodo, handleRemoveTodo }) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          if(todo.display){
            return(<Todo
                key={todo.id}
                task={todo.task}
                completed={todo.completed}
                // Now we will use matching by id's instead of index
                handleOnClick={() => handleToggleTodo(todo.id)}
                handleRemoveTodo={() => handleRemoveTodo(todo.id)}
              />)
          }
        })
      }
    </ul>
  )
}

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {
//           this.props.todos.map((todo, index) => (
//             <Todo
//               key={todo.id}
//               task={todo.task}
//               completed={todo.completed}
//               toggleTodo={() => this.props.toggleTodo(index)}
//             />
//           ))
//         }
//       </ul>
//     )
//   }
// }

export default TodoList;
