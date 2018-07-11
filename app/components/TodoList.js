import React from 'react';
import Todo from './Todo';

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

const TodoList =({todos, handleToggleTodo, handleRemoveTodo}) => {
  console.log(todos)
  return (
      <ul>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              toggleTodo={()=>handleToggleTodo(todo.id)}
              removeTodo={()=>handleRemoveTodo(todo.id)}
            />
          ))
        }
      </ul>
  )
}

export default TodoList;
