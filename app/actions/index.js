function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}
function toggleTodo(id){
  return {
    type: 'COMPLETE',
    id
  }
}
function removeTodo(id){
  return {
    type: 'REMOVE',
    id
  }
}
function filterTodos(id){
  return {
    type: 'FILTER',
    id
  }
}
export  {
  addTodo,
  toggleTodo,
  removeTodo,
  filterTodos
}
