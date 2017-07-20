const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return state.concat({
        id: action.id,
        task: action.task,
        completed: action.completed
      });
    case 'TOGGLE_TODO':
      let toggleState = [...state];
      toggleState.forEach(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
      });
      return toggleState;
    case 'REMOVE_TODO':
      let removeState = [...state];
      removeState.forEach((todo,index) => {
        if (todo.id === action.id) {
          removeState.splice(index, 1);
        }
      });
      return removeState;
    default:
      return state;
  }
}

export default reducer;
