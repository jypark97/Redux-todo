// Inside app/reducers/index.js
let last = Date.now()

const reducer = (state = [], action) => {
  console.log(state);
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
    case 'CLICK_TODO':
    var now = Date.now()
      if(Date.now() - last < 250){
        var recentState = state.filter((todo) => (todo.id !== action.id))
        console.log('In delete');
        last = now;
        return recentState;
      } else {
        console.log('In toggle');
        console.log(Date.now() - last);
        var recentState = state.map((todo) => {
          return todo = todo.id === action.id ? {
            id: action.id,
            task: todo.task,
            completed: !todo.completed
          }: todo;
        });
        console.log(recentState);
        last = now;
        return recentState;
      }
      default:
        return state;
  }
}

export default reducer;
