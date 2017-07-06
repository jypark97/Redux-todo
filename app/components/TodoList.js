import React from 'react';
import Todo from './Todo';

const TodoList=({todos, toggleTodo, deleteTodo})=>{ //because we converted class to function the props are listed as parameters

    return (
      <ul>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              handleOnClick={() => toggleTodo(todo.id)}
              deleteTodoClick={()=>deleteTodo(todo.id)}
              //these are properties because in <Todo and so deleteTodoClick actually go todo so you have to use its name as the same in each

            />
          ))
        }
      </ul>
  )
}


export default TodoList;
