export function addTodoAction(id, task) {
  return {
    type: 'ADD_TODO',
    id,
    task,
    completed: false
  };
}

export function toggleTodoAction(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

export function removeTodoAction(id) {
  return {
    type: 'REMOVE_TODO',
    id
  };
}
