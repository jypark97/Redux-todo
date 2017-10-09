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

function filterNone() {
  return {
    type: "FILTER_NONE",
  };
}

function filterCompleteOnly() {
  return {
    type: "FILTER_COMPLETE",
  };
}

function filterIncompleteOnly() {
  return {
    type: "FILTER_INCOMPLETE",
  };
}

export {addTodo, toggleTodo, removeTodo, filterNone, filterCompleteOnly, filterIncompleteOnly};
