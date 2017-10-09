function addTodo(id, task) {
  return {
    type: 'ADD_TODO',
    id,
    task,
    completed: false,
  };
}

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}

function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    id,
  };
}

export {addTodo, toggleTodo, removeTodo};
