export const addTodo = (id, task) => {
  return {
    type: 'ADD_TODO',
    id: id,
    task: task,
    completed: false
  };
};
