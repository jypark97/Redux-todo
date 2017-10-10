// const typicalTodoAction = {
//   type: 'ADD_TODO',
//   id: 5,
//   task: 'Build A Todo App',
//   completed: false
// }
// addTodo(5, 'Build A Todo App')

var addTodo = function addTodo(id, task) {
  return {
    type: 'ADD_TODO',
    id,
    task,
    completed: false
  };
};

var toggleTodo = function(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

var deleteTodo = function(id) {
  return {
    type: 'DELETE_TODO',
    id
  }
}


export {addTodo, toggleTodo, deleteTodo};
