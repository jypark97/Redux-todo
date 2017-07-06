import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, toggleTodo, removeTodo}) => {

    return (
      <div className="todolist">

        <ul>
          {
            todos.map((todo) => (
              // if(todo.display){

                <Todo
                  key={todo.id}
                  task={todo.task}
                  completed={todo.completed}

                  //use matching ids instead of index
                  toggleTodo={() => toggleTodo(todo.id)}
                  removeTodo = {() => removeTodo(todo.id)}
                />

              // }
            ))
          }
        </ul>
      </div>
    )

}

export default TodoList;
