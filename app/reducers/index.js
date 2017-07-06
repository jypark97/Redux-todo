const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      let newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      newState.push(newTodo);
      return newState;

    case "TOGGLE_TODO":
      let toggleState = [...state];
      for (var i = 0; i < toggleState.length; i++) {
          if (toggleState[i].id === action.id) {
              toggleState[i].completed = !toggleState[i].completed
          }
      }
       return toggleState;

    case "REMOVE_TODO":
      let removeState = [];
      state.forEach((todo) => {
        if (todo.id !== action.id) {
          removeState.push(todo)
        }
      })
        return removeState;
    default:
      return state;
  }
};

export default reducer;
