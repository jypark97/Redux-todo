export function addToDo(id, task) {
  return {
    type: "ADD_TODO",
    task,
    id,
    completed: false
  }
};

export function toggleToDo(id) {
  return {
    type: "TOGGLE_TODO",
    id,
    completed: false
  }
};

export function removeToDo(id, task) {
  return {
    type: "REMOVE_TODO",
    task,
    id,
    completed: false
  }
};
