// const todoAction = {
//   type: 'ADD_TODO',
//   task: 'NEW todo',
//   id: 5,
//   completed: false
// }

export function addTodo(id,task) {
  //{id} is the same as {id:id}
  return{
    type: 'ADD_TODO',
    task,
    id,
    completed: false
  }
}

export function toggleTodo(id) {
  return{
    type:'TOGGLE_TODO',
    id
  }
}

export function removeTodo(id){
  return{
    type:'REMOVE_TODO',
    id
  }
}
