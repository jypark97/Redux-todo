export function addTodo(id, task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

export function toggle(id) {
  return {
    type: "TOGGLE",
    id,
  }
}

export function remove(id) {
  return {
    type: "REMOVE",
    id,
  }
}

export function filterTodos(filter) {
  return {
    type: "FILTER",
    filter,
  }
}
