export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  };
}

export function showAll() {
  return {
    type: 'SHOW_ALL'
  };
}

export function showCompleted() {
  return {
    type: 'SHOW_COMPLETED'
  };
}

export function showUncompleted() {
  return {
    type: 'SHOW_UNCOMPLETED'
  };
}
