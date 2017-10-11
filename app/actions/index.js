// const addTodo = (id, task) => {
//   console.log('Inside add todo');
//   console.log(task);
//   return {
//   type: 'ADD_TODO',
//   id,
//   task,
//   completed: false
//   }
// }
//
// export {
//   addTodo,
// }

export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

export function clickTodo(id) {
  return {
    type: 'CLICK_TODO',
    id,
  }
}
