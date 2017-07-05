const reducer = (state = {todos: [], filterBy: "all"}, action) => {
  
  switch (action.type) {
    // Missing cases
    case 'ADD_TODO':
      // copy new state so no mutations to old state
      const newState = [ ...state.todos ];
      // create the todo from the action object
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      // okay to mutate our own copy
      newState.push(newTodo);
      return {todos: newState, filterBy: state.filterBy};

    case 'TOGGLE_TODO':
      let toggleState = [ ...state.todos ];
      // create the todo from the action object
      toggleState = toggleState.map((todo) => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            task: todo.task,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
      return {todos: toggleState, filterBy: state.filterBy};

    case 'DELETE_TODO':
      let deleteState = [ ...state.todos ];
      // create the todo from the action object
      deleteState = deleteState.filter((todo) => {
        return todo.id !== action.id;
      })
      return {todos: deleteState, filterBy: state.filterBy};

    case 'FILTER_BY_COMPLETED':
      return {todos: state.todos, filterBy: 'completed'}

    case 'SHOW_ALL':
      return {todos: state.todos, filterBy: 'all'}

    default:
      return state;
  }
};

export default reducer;
