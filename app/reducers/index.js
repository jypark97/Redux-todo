const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
        let newState = [...state];

        const newTodo = {
          id: action.id,
          task: action.task,
          completed: action.completed
        };

        newState.push(newTodo);
        return newState;

    case 'TOGGLE_TODO':
        newState = [...state];
        let todo = newState[action.id];

        newState[action.id].completed = !newState[action.id].completed;
        return newState;
    case 'DELETE':
        newState = [...state]
        var itemIndex = newState.findIndex(x => x.id === action.id);
        return itemIndex > -1 ? [...newState.slice(0,itemIndex), ...newState.slice(itemIndex + 1)] : state;
    default:
        return state;
  }
}

export  default reducer;
