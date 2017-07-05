const reducer = (state = {visibilityFilter: 'SHOW_ALL', todos: []}, action) => {
   switch (action.type) {
       case 'ADD_TODO':
          const newState = Object.assign({}, state);
          const newTodo = {
            id: action.id,
            task: action.task,
            completed: action.completed
          };
          newState.todos = newState.todos.concat(newTodo)
          return newState;
       case 'TOGGLE':
          const newStateToggle = [...state.todos];
          newStateToggle[action.id].completed = !newStateToggle[action.id].completed
          return Object.assign({}, state, {todos: newStateToggle});
       case 'REMOVE':
          const newStateRemove = [...state.todos];
          newStateRemove.splice(action.id, 1)
          for(let i = action.id; i < newStateRemove.length; i++) {
            newStateRemove[i].id = newStateRemove[i].id - 1;
          }
          return Object.assign({}, state, {todos: newStateRemove});
       case 'SHOW_ALL':
          const newStateShowAll = Object.assign({}, state);
          newStateShowAll.visibilityFilter = 'SHOW_ALL';
          return newStateShowAll;
       case 'SHOW_COMPLETED':
          const newStateCompleted = Object.assign({}, state);
          newStateCompleted.visibilityFilter = 'SHOW_COMPLETED'
          return newStateCompleted;
       case 'SHOW_NOT_COMPLETED':
          const newStateNotCompleted = Object.assign({}, state);
          newStateNotCompleted.visibilityFilter = 'SHOW_NOT_COMPLETED'
          return newStateNotCompleted;
       default:
          return state;
   }
};

export default reducer;
