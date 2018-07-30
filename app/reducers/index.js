const reducer = (state = [], action) => {
  switch(action.type) {
    case: 'ADD_TODO':
      const newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
      }
      newState.push(newTodo);
      return newState
    default:
      return state;
  }
}

export default reducer;
