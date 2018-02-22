export function addTodo(id, task) {
  return {
    type: 'ADD_TODO',
    id,
    task,
    completed: false
  };
}

export function handleToggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function handleDelete(id) {
  return {
    type: 'DELETE',
    id
  }
}
