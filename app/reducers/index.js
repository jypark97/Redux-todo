const reducer = (state = [], action) => {
  // copy new state so no mutations to old state
  const newState = [ ...state ];
  switch (action.type) {
    case 'ADD_TODO':
      // create the todo from the action object
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: false
      };
      // okay to mutate our own copy
      return [ ...state, newTodo ]
    case 'TOGGLE_TODO':
      newState.forEach((element) => {
        if (element.id === action.id) {
          element.completed = !element.completed;
        }
      })
      return newState;
    case 'DELETE_TODO':
      const newNewState = [];
      newState.forEach((element) => {
        if (element.id !== action.id) {
          newNewState.push(element);
        }
      })
      return newNewState;
    default:
      return state;
    }
};

export default reducer;
