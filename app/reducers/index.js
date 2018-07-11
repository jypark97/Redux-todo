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
          const toggleState = [...state];
          const toggledState =  toggleState.map((todo) => {
            todo.completed = (todo.id === action.id) ? !todo.completed : todo.completed;
            return todo;
          });
          return toggledState;
       case 'REMOVE_TODO':
          const removeState = [...state];
          const removedState = removeState.filter((todo) => {
            if(todo.id !== action.id){return todo;}
          });
          return removedState;
       case 'FILTER_TODO':
          const filterState = [...state];
          const filteredState = filterState.filter((todo) => {
            if(!todo.completed){return todo;}
          });
          return filteredState;
       default:
           return state;
   }
};

export default reducer;
