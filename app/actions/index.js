function addTodo(id, task) {
 return {
   type: 'ADD_TODO',
   //Reminder: { something } in ES2015 is just shorthand for { something : something }.
   id,
   task,
   completed: false
 };
}

function toggleTodo(id) {
 return {
   type: 'TOGGLE_TODO',
   //Reminder: { something } in ES2015 is just shorthand for { something : something }.
   id
 };
}
function deleteTodo(id) {
 return {
   type: 'DELETE_TODO',
   //Reminder: { something } in ES2015 is just shorthand for { something : something }.
   id
 };
}

export {addTodo, toggleTodo, deleteTodo}
