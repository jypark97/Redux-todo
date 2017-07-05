// typical action shape for ADD_TODO

export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}
