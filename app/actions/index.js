// const typicalTodoAction = {
//   type: 'ADD_TODO'
//   id: 5,
//   task: 'Build A Todo App',
//   completed: false
// }
// addTodo(5,'Build A Todo App')

export function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  };
}

export function filterImcompleteTask() {
  return {
    type:'FILTER_TODO_IMCOMPLETED'
  }
}

export function filterCompleteTask() {
  return {
    type: 'FILTER_TODO_COMPLETED'
  }
}
