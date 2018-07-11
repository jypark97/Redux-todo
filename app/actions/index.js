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
  }
}

export function removeTodo(id){
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export function filterTodo(id){
  return {
    type: 'FILTER_TODO',
    id
  }
}
