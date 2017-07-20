import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo, removeTodo}) => {
  return (
    <div>
      <ul>
        {
          todos.map(({id, task, completed}) => (
            <Todo
              key={id}
              task={task}
              completed={completed}
              toggleTodo={() => toggleTodo(id)}
              removeTodo={() => removeTodo(id)}
            />
          ))
        }
      </ul>
    </div>
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
