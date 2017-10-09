
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
          // console.log(action);
           const toggleTodo = Object.assign(
             {},
             state[action.id],
             { completed: !state[action.id].completed }
           );
           const newTodos = [
             ...state.slice(0, action.id),
             toggleTodo,
             ...state.slice(action.id + 1)
           ];
           return newTodos
       case 'DELETE_TODO':
       return [...state.slice(0, -1)]
       default:
           return state;
   }
};

export default reducer;
