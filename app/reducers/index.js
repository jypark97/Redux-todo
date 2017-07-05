const initialState = [{task:"Bob", id: 0, completed: false}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      }
      newState.push(newTodo);
      return newState;
    case "TOGGLE_TODO":
      const i = action.id;
      const newCompleted = !state[i].completed;
      return [
        ...state.slice(0, i), //before the one we are updating
        {...state[i], completed: newCompleted},
        ...state.slice(i + 1) //after the one we are updating
      ]
    default:
      return state;
  }
};

export default reducer;
