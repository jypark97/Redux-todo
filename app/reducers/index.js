const reducer = (state = {visibilityFilter: 'SHOW_ALL', todos: []}, action) => {
   switch (action.type) {
       case 'ADD_TODO':
           // copy new state so no mutations to old state
           const newState = Object.assign({}, state);
           // create the todo from the action object
           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed
           };
           // okay to mutate our own copy
           newState.todos = newState.todos.concat(newTodo);
           return newState;
       case 'TOGGLE_TODO':
          //  const newState2 = Object.assign({}, state);
          //  let index = newState2.todos.findIndex((todo) => {
          //    return todo.id === action.id;
          //  });
          //  newState2.todos[index].completed = !newState2.todos[index].completed;
           const newStateToggle = [...state.todos];
           let index = newStateToggle.findIndex((todo) => {
             return todo.id === action.id;
           });
           newStateToggle[index].completed = !newStateToggle[index].completed;
          //  const final = [...newState2];
           return Object.assign({}, state, {todos: newStateToggle});
       case 'REMOVE_TODO':
           const newStateRemove = [...state.todos];
           let index2 = newStateRemove.findIndex((todo) => {
             return todo.id === action.id;
           });
           newStateRemove[index2].completed = !newStateRemove[index2].completed;
           newStateRemove.splice(index2, 1);
          //  const final = [...newState2];
           return Object.assign({}, state, {todos: newStateRemove});
       case 'SHOW_ALL':
           const newStateAll =  Object.assign({}, state);
           newStateAll.visibilityFilter = 'SHOW_ALL';
           return newStateAll;
       case 'SHOW_COMPLETED':
           const newStateCompleted =  Object.assign({}, state);
           newStateCompleted.visibilityFilter = 'SHOW_COMPLETED';
           return newStateCompleted;
       case 'SHOW_UNCOMPLETED':
           const newStateUn =  Object.assign({}, state);
           newStateUn.visibilityFilter = 'SHOW_UNCOMPLETED';
           return newStateUn;
       default:
           return state;
   }
};

export default reducer;
