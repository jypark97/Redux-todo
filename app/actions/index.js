function addTodo(id,task) {
  return {
    type: 'ADD_TODO',
    id,
    task
  };
}

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}

export {addTodo, toggleTodo, deleteTodo}
