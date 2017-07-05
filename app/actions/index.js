export function addTodo(id, task) {
  return {
    type: 'ADD_TODO',
    task: task,
    completed: false,
    id: id
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    completed: false,
    id: id
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id: id
  };
}

export function filterByCompleted() {
  return {
    type: 'FILTER_BY_COMPLETED'
  }
}

export function showAll() {
  return {
    type: 'SHOW_ALL'
  }
}
