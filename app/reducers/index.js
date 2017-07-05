const reducer = (state = [], action) => {
   switch (action.type) {
       case 'ADD_TODO':
           // copy new state so no mutations to old state
           const newState = [ ...state ];
           // create the todo from the action object
           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed
           };
           // okay to mutate our own copy
           newState.push(newTodo);
           return newState
        case 'TOGGLE_TODO':
          let newState2 = [...state];
          for (var i=0;i<state.length;i++) {
            if (state[i].id === action.id) {
              newState2[i].completed = !state[i].completed;
              break;
            }
          }
          return newState2;
       default:
           return state;
   }
};

export default reducer;
