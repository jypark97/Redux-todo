const reducer = (state = {todos: [], filter: false}, action) => { // state = object
  switch (action.type) {
    case 'ADD_TODO':
      const newTodos = [ ...state.todos ]
      const newTodo = {
        id: action.id,
        completed: false,
        task: action.task
      }
      newTodos.push(newTodo)
      return {todos: newTodos, filter: false};
    case 'TOGGLE_TODO':
      let foundTodo;
      let foundIndex;
      for (var i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.id) {
          foundTodo = state.todos[i];
          foundTodo.completed = !foundTodo.completed
          foundIndex = i;
          break;
        }
      }
      const newToggle = [ ...state.todos.slice(0, foundIndex), foundTodo, ...state.todos.slice(foundIndex + 1)]
      return {todos: newToggle, filter: false};
    case 'REMOVE_TODO':
      let toBeRemoved;
      let removeIndex;
      for (var i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.id) {
          toBeRemoved = state.todos[i]
          removeIndex = i;
          break;
        }
      }
      const newRemove = [ ...state.todos.slice(0, removeIndex), ...state.todos.slice(removeIndex + 1)]
      return {todos: newRemove, filter: false};
    case 'TOGGLE_FILTER':
      return Object.assign({}, state, { filter: !state.filter })
    default:
      return state;
   }
};

export default reducer;
