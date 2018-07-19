export function addTodo(id, task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false,
  display: true
 };
}

export function handleToggleTodo(id) {
  return {
    type: 'TOGGLE_STRIKE',
    id: id
  }
}

export function handleRemove(id) {
  return {
    type: 'REMOVE',
    id: id
  }
}


export function filterTodos(e) {
  console.log(e.target.value);
  return {
    type: 'FILTER',
    filterBy: e.target.value
  }
}
