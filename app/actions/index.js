// typical action shape for ADD_TODO

export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

export function toggleTodo(id){
  return {
    type: 'TOGGLE',
    id
  }
}


export function removeTodo(id){
  return {
    type: 'Remove',
    id
  }
}

export function toggleFilter(id){
  return {
    type: 'TOGGLE_FILTER'
  }
}
