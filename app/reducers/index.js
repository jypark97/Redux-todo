const reducer = (state = {filter: 'none', todos: []}, action) => {
  switch(action.type) {
  case 'ADD_TODO': {
    const newTodo = {
      id: action.id,
      task: action.task,
      completed: action.completed,
    };
    return Object.assign({}, state, {todos: [...state.todos, newTodo]});
  }

  case 'TOGGLE_TODO': {
    // Linear search for the todo to toggle
    let toggleIndex = -1;
    for(let i = 0; i < state.todos.length; i++) {
      if(state.todos[i].id === action.id) {
        // Found the correct one
        toggleIndex = i;
        break;
      }
    }
    if(toggleIndex === -1) {
      throw new Error('Tried to toggle todo by ID that does not exist');
    }
    const updatedTodo = Object.assign({},
      state.todos[toggleIndex],
      {completed: !state.todos[toggleIndex].completed});
    return Object.assign({}, state, {todos:
      [...state.todos.slice(0, toggleIndex), updatedTodo, ...state.todos.slice(toggleIndex+1)]
    });
  }

  case 'REMOVE_TODO': {
    // Linear search for the todo to toggle
    let removeIndex = -1;
    for(let i = 0; i < state.todos.length; i++) {
      if(state.todos[i].id === action.id) {
        // Found the correct one
        removeIndex = i;
        break;
      }
    }
    if(removeIndex === -1) {
      throw new Error('Tried to remove todo by ID that does not exist');
    }
    return Object.assign({}, state, {todos: [...state.todos.slice(0, removeIndex), ...state.todos.slice(removeIndex+1)]});
  }

  case 'FILTER_NONE': {
    return Object.assign({}, state, {filter: 'none'});
  }

  case 'FILTER_COMPLETE': {
    return Object.assign({}, state, {filter: 'completeOnly'});
  }

  case 'FILTER_INCOMPLETE': {
    return Object.assign({}, state, {filter: 'incompleteOnly'});
  }

  default:
    return state;
  }
};

export default reducer;
