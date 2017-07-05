//for action creators

// const addToDo = (id, task) => {
const addToDo = (id, task) => {
  return {
    type: 'ADD_TODO',
    id: id,
    task:task,
    completed: false
  }
}

export default addToDo;
