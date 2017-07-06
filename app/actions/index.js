// Inside /app/actions/index.js
export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function showCompleted() {
  return {
    type: 'SHOW_COMPLETED'
  }
}

export function showUncompleted() {
  return {
    type: 'SHOW_UNCOMPLETED'
  }
}
