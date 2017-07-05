const reducer = (state = [], action) => {
  let newState = null;
  switch (action.type) {
    case 'ADD_TODO':
      // copy new state so no mutations to old state
      newState = [...state];
      // create the todo from the action object
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      // okay to mutate our own copy
      newState.push(newTodo);
      return newState;
    case 'TOGGLE':
      newState = [...state];
      newState.forEach(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
      })
      return newState;
      case 'REMOVE':
      newState = [...state];
      let index = 0;
      newState.forEach((todo, foundIndex) => {
        if (todo.id === action.id) {
          index = foundIndex;
        }
      });
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default reducer;
