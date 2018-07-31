export function addTodo(id,task) {
  return {
    type: 'ADD_TODO',
    id,
    task,
    completed: false
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export function showAll() {
  return {
    type: 'SHOW_ALL',
  }
}
