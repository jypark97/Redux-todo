const reducer = (state = [], action) => {
   let newState;
   let newTodo;
   let index;
   switch (action.type) {
       case 'ADD_TODO':
        //copy so you don't mutate old one
        newState = [ ...state ];

        // create the todo from the action object
        newTodo = {
            id: action.id,
            task: action.task,
            completed: action.completed
        };

        newState.push(newTodo);
        return newState;

      case 'TOGGLE_TODO':

        //need to look for spot with action.id here too
        newState = [ ...state ];
        for(var i = 0; i < newState.length; i++){
          if(newState[i].id === action.id){
            index = i;
          }
        }

        newState[index].completed = !newState[index].completed;
        return newState;

      case 'REMOVE_TODO':

        newState = [ ...state ];
        for(var i = 0; i < newState.length; i++){
          if(newState[i].id === action.id){
            index = i;
          }
        }

        if(index === 0){
          newState = state.slice(1);
        }else if(index === state.length-1){
          newState = state.slice(0, state.length-1);
        }else{
          newState = state.slice(0,index).concat(state.slice(index+1));
        }

        return newState;

      default:
        return state;
        
   }
};

export default reducer;
