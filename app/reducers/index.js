const reducer = (state = [], action) => {
  switch(action.type) {
  case 'ADD_TODO': {
    const newTodo = {
      id: action.id,
      task: action.task,
      completed: action.completed,
    };
    return [...state, newTodo];
  }
  case 'TOGGLE_TODO': {
    // Linear search for the todo to toggle
    let toggleIndex = -1;
    for(let i = 0; i < state.length; i++) {
      if(state[i].id === action.id) {
        // Found the correct one
        toggleIndex = i;
        break;
      }
    }
    if(toggleIndex === -1) {
      throw new Error('Tried to toggle todo by ID that does not exist');
    }
    const updatedTodo = Object.assign({},
      state[toggleIndex],
      {completed: !state[toggleIndex].completed});
    return [...state.slice(0, toggleIndex), updatedTodo, ...state.slice(toggleIndex+1)];
  }
  case 'REMOVE_TODO': {
    // Linear search for the todo to toggle
    let removeIndex = -1;
    for(let i = 0; i < state.length; i++) {
      if(state[i].id === action.id) {
        // Found the correct one
        removeIndex = i;
        break;
      }
    }
    if(removeIndex === -1) {
      throw new Error('Tried to remove todo by ID that does not exist');
    }
    return [...state.slice(0, removeIndex), ...state.slice(removeIndex+1)];
  }
  default:
    return state;
  }
};

export default reducer;
