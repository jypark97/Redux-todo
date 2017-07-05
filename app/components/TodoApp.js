import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

let id = 0;

const TodoApp =({ todos, addTodoClick, toggleTodoClick }) => {
    return (
        <div>
        {/* leave this alone for now */}
        <InputLine
            addTodo={(text) => addTodoClick(id++, text)}
        />
        <TodoList
            todos={todos}
            toggleTodo={(id) => toggleTodoClick(id)}
        />
        </div>
    );
}

export default TodoApp;
