const reducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO':
      const newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
      }
      newState.push(newTodo);
      return newState;
    case "TOGGLE_TODO":
      const newTodo1 = Object.assign({}, state[action.id], {completed: !state[action.id].completed})
      const newState1 = [...state.slice(0, action.id), newTodo1, ...state.slice(action.id + 1)];
      return newState1;

    default:
      return state;
  }
}

export default reducer;
