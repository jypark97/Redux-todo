export const addTodo = (task, id) => {

  return {
    type: 'ADD_TODO',
    task,
    id,
    completed: false

  }
}

// export const toggleTodo
export const toggleTodo = (id) =>{
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const removeTodo = (id) => {
  return{
    type: 'REMOVE_TODO',
    id
  }
}
