export function addToDo(id, task) {
  return {
    type: "ADD_TODO",
    task,
    id,
    completed: false
  }
};
