const addTodo = (id,task) => {
 return {
  type: 'ADD_TODO',
  id: id,
  task: task,
  completed: false
 };
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id: id
  }
}

const filterTodos = () => {
  return {
    type: 'TOGGLE_FILTER'
  }
}

export {addTodo, toggleTodo, removeTodo, filterTodos}
