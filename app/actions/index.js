export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false,
  show: true
 };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE',
    id
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE',
    id
  }
}

export function show(filter) {
  return {
    type: 'SHOW',
    filter
  }
}
