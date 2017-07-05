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

const TodoList =({ todos, toggleTodo, deleteTodo, filterBy }) => {
  let currTodos = todos.slice();
  if (filterBy === 'completed') {
    console.log("filtering")
    currTodos = todos.filter((todo) => (todo.completed));
  }
  return (
    <ul>
      {
        currTodos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by id's instead of index
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
