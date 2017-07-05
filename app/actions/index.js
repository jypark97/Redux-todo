
 export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

export function toggle(id) {
  return {
    type: 'TOGGLE',
    id,
  }
}

export function remove(id) {
  return {
    type: 'REMOVE',
    id,
  }
}

export function showAll() {
  return {
    type: 'SHOW_ALL'
  }
}

export function showCompleted() {
  return {
    type: 'SHOW_COMPLETED'
  }
}

export function showNotCompleted() {
  return {
    type: 'SHOW_NOT_COMPLETED'
  }
}
