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
       case 'TOGGLE':
         const newState2 = [ ...state ]
         newState2.map((task, index) => {
           if (task.id === action.id) {
             console.log(task.id, action.id)
             return newState2[index].completed = !newState2[index].completed
           }
         })
         return newState2
          // newState2[action.id].completed = !newState2[action.id].completed
          // return newState2
       case 'REMOVE_TODO':
        const newState3 = [ ...state ]
        for (var i=0; i<newState3.length; i++) {
          if (newState3[i].id === action.id) {
            newState3.splice(i,1)
            console.log(newState3)
            return newState3
          }
        }
        // newState3.splice(action.id,1)
        // return newState3
       default:
           return state;
   }
};

export default reducer;
