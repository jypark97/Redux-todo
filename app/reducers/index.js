const reducer = (state=[], action) => {
   switch (action.type) {
       // Missing cases
       case 'ADD_TODO':
          const newState=[...state]; //so doesn't change old state
          const newTodo={
            id: action.id,
            task: action.task,
            completed: action.completed
          };
          newState.push(newTodo)
          return newState
        case 'TOGGLE_TODO':
           const newState2=[...state]; //so doesn't change old state
           newState2.forEach(function(todo, index){
             if(todo.id===action.id){
               newState2[index]={
                 id:newState2[index].id,
                 task:newState2[index].task,
                 completed: !newState2[index].completed
               }
             }
           })
           return newState2
         case 'DELETE_TODO':
            const newState3=[...state]; //so doesn't change old state
            newState3.forEach(function(todo, index){
              if(todo.id===action.id){
                newState3.splice(index, 1);
              }

            })
            return newState3
       default:
           return state;
   }
};

export default reducer;
