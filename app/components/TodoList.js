import React from 'react';
import Todo from './Todo';

const TodoList =({ todos, handleToggleTodo, handleRemoveTodo }) => {

  if(todos.status === 'complete'){
    todos = todos.complete
  }else if(todos.status === 'incomplete'){
    todos = todos.incomplete
  }else{
    todos = todos.all
  }
  console.log('todolist', todos)

  return (

    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            // Now we will use matching by id's instead of index
            toggleTodo={() => handleToggleTodo(todo.id)}
            removeTodo={() => handleRemoveTodo(todo.id)}
          />
        ))
      }
    </ul>

  )
}

export default TodoList;

// initial
// import React from 'react';
// import Todo from './Todo';
//
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
//
// export default TodoList;
