const reducer = (state = new Array(), action) => {
   switch (action.type) {
      case 'ADD_TODO':
        const newState = state.slice();
        const  newTodo = {
          id: action.id,
          task: action.task,
          completed: action.completed
        };
        newState.push(newTodo);
        return newState;

        case 'TOGGLE':
          const newState1 = state.slice();
          const id2 = action.id;
          let ind = 0;
          newState1.forEach(function(item, index) {
            if(item.id === id2) ind = index;
          })
          newState1[ind].completed = action.completed;
          return newState1;

        case 'REMOVE':
        const newState2 = state.slice();
        const id = action.id;
        let ind2 = 0;
        newState2.forEach(function(item, index) {
          if(item.id === id) ind2 = index;
        })
        newState2.splice(ind2,1);
        return newState2;
       default:
           return state;
   }
};

export default reducer;
