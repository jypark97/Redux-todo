import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import FilterTodo from './Filtering';
import { connect } from 'react-redux';
import { addTodo, completedTask, deleteTask, filterTask } from '../actions/index';

let id = Math.floor(Math.random()*4999)+1;

// const TodoApp = ({todos}) => {
let TodoApp = ({ todos, addTodoClick, toggleTodoClick, deleteTodoClick, filterTodoClick }) => {
// class TodoApp extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { todos: [] };
  // }

  // toggleTodo(index) {
  //   const newTodo = Object.assign(
  //     {},
  //     this.state.todos[index],
  //     { completed: !this.state.todos[index].completed }
  //   );
  //   const newTodos = [
  //     ...this.state.todos.slice(0, index),
  //     newTodo,
  //     ...this.state.todos.slice(index + 1)
  //   ];
  //   this.setState({ todos: newTodos });
  // }
  //
  // addTodo(task) {
  //   const newTodo = {
  //     id: id++,
  //     task: task,
  //     completed: false
  //   };
  //   const newTodos = [ ...this.state.todos ]
  //   newTodos.push(newTodo);
  //   this.setState({ todos: newTodos });
  // }
    return (
      <div>
        <InputLine
          addTodo={(task) => addTodoClick(id++, task)}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={(id) => toggleTodoClick(id)}
          handleDeleteTodo={(id) => deleteTodoClick(id)}
        />
        <br/>
        <FilterTodo handleFilter={(filter) => filterTodoClick(filter)}/>
      </div>
    );

}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoClick: (id, task) => { dispatch( addTodo(id, task) ) },
    toggleTodoClick: (id) => { dispatch( completedTask(id) ) },
    deleteTodoClick: (id) => { dispatch ( deleteTask(id)) },
    filterTodoClick: (filter) => { dispatch (filterTask(filter)) }
  }
}

TodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoApp;
