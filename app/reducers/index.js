//reducers
const reducer = (state = [], action) => {
   switch (action.type) {
       case 'ADD_TODO':
           // copy new state so no mutations to old state
           const newState = [ ...state ];
           // create the todo from the action object
           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed,
               display: true
           };
           newState.push(newTodo);
           return newState;
       case 'TOGGLE_TODO':
        let toggleState = [ ...state ];
        toggleState.forEach(function(todo) {
          // console.log("todo",todo);
          if(todo.id == action.id){
            todo.completed = !todo.completed
          }
        })
        return toggleState;
      case 'REMOVE_TODO':
        const removedState = [ ...state ];
        let i = -1;
        removedState.forEach(function(todo, index) {
          // console.log("todo",todo);
          if(todo.id == action.id){
            i=index;
          }
        })
        if(i!==-1){
          removedState.splice(i,1);
        }
        return removedState;
      case 'FILTER_TODO':
        let filteredState = [ ...state ];
        filteredState.forEach(function(todo) {
          if(action.filterby == "Complete"){
            if(todo.completed){
              todo.display = true;
            }else{
              todo.display= false;
            }
          }else if(action.filterby == "Incomplete"){
            if(todo.completed){
              todo.display = false;
            }else{
              todo.display= true;
            }
          }else{
            todo.display = true;
          }
      })
      return filteredState;

       default:
           return state;
   }
};
export default reducer;
