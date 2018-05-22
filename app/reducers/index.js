const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      }
      return [ ...state, newTodo];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        return todo.id === action.id ? {
          id: todo.id,
          task: todo.task,
          completed: !todo.completed
        } : todo
      })
    case 'DELETE_TODO':
      let removeIndex = state.reduce((index, next, i) => next.id === action.id ? i : index, state.length);
      return [ ...state.slice(0, removeIndex), ...state.slice(removeIndex + 1)];
    default:
      return state;
  }
}

export default reducer;
