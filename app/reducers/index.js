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
      return state.map((todo, i) => {
        return i === action.id ? {
          id: action.id,
          task: action.task,
          completed: !action.completed
        } : todo
      })
    default:
      return state;
  }
}

export default reducer;
