//for action creators

// const addToDo = (id, task) => {
const addTodo = (id, task) => {
  return {
    type: 'ADD_TODO',
    id: id,
    task: task,
    completed: false
  }
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id,
    completed: true
  }
}

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id: id,
    completed: true
  }
}

const filterTodo = (filterby) => {
  return {
    type: 'FILTER_TODO',
    filterby: filterby
  }
}

export { addTodo, toggleTodo, removeTodo, filterTodo };
