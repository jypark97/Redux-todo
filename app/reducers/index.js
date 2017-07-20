const reducer = (state = {array: [], checked: false, completedArray: []}, action) => {
  const newState = {array: [...state.array], checked: state.checked, completedArray: state.completedArray};
  switch (action.type) {
    case 'ADD_TODO':
      // copy new state so no mutations to old state
      // create the todo from the action object
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      // okay to mutate our own copy
      newState.array.push(newTodo);
      newState.completedArray = newState.array.filter(function(item) {
        return item.completed;
      });
      return newState;
    case 'TOGGLE_TODO':
      for (let i = 0; i < newState.array.length; i++) {
        if (newState.array[i].id === action.id) {
          newState.array[i].completed = !newState.array[i].completed;
          break;
        }
      }
      newState.completedArray = newState.array.filter(function(item) {
        return item.completed;
      });
      return newState;
    case 'REMOVE_TODO':
      let index = 0;
      for (let i = 0; i < newState.array.length; i++) {
        if (newState.array[i].id === action.id) {
          index = 0;
          break;
        }
      }
      newState.array.splice(index, 1);
      newState.completedArray = newState.array.filter(function(item) {
        return item.completed;
      });
      return newState;
    case 'TOGGLE_CHECK_BOX':
      newState.checked = !newState.checked;
      return newState;
    default:
      return state;
  }
};

export default reducer;
