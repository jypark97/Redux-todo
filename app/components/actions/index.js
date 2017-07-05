//house our 'action creators'

export function addTodo(id, task)   {
  return{
    type: 'ADD_TODO',
    id: id,
    task: task,
    completed: false
  }
}
//house our 'action creators'

export function crossTodo(id, task)   {
  return{
    type: 'CROSS_TODO',
    id: id,
    task: task,
    completed: true
  }
}

export function removeTodo(id, task)   {
  return{
    type: 'REMOVE_TODO',
    id: id,
    task: task,
    completed: true
  }
}
