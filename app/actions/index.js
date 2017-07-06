export function addTodo(id, task) {
   return {
       type: 'ADD_TODO',
       task,
       id,
       completed: false
   };
}

export function toggleTodo(id) {
   return {
       type: 'TOGGLE_TODO',
       id
   };
}

export function deleteTodo(id) {
   return {
       type: 'DELETE_TODO',
       id
   };
}

export function showAll() {
   return {
       type: 'SHOW_ALL'
   };
}

export function showComplete() {
   return {
       type: 'SHOW_COMPLETE'
   };
}

export function showUncomplete() {
   return {
       type: 'SHOW_UNCOMPLETE'
   };
}
