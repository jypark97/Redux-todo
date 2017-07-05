// Inside app/reducers/index.js
const reducer = (state = {arr : [] ,
  filter : false}, action) => {
   switch (action.type) {
       case 'ADD_TODO':
           // copy new state so no mutations to old state
           const newState = [ ...state.arr ];
           // create the todo from the action object
           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed
           };
           // okay to mutate our own copy
           newState.push(newTodo);
           return {arr: newState, filter: state.filter}

      case 'TOGGLE':
       var newState1 = [ ...state.arr ];
       var index=0;
       newState1.forEach((item,i) => {
         if(item.id === action.id){
           index = i;
         }
       })
       newState1[index].completed =! newState1[index].completed
       return {arr: newState1, filter: state.filter}


        case 'Remove':
         var newState2 = [ ...state.arr ];
         var index=0;
         newState2.forEach((item,i) => {
           if(item.id === action.id){
             index = i;
           }
         })
         newState2.splice(index,1);
              return {arr: newState2, filter: state.filter}

        case 'TOGGLE_FILTER':
          return {arr: state.arr, filter: !state.filter}


       default:
           return state;
   }
};

export default reducer;
