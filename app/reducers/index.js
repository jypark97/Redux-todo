const reducer = (state ={todos:[], filter: null}, action) => {
   switch (action.type) {
      case 'ADD_TODO':
        const  newTodo = {
          id: action.id,
          task: action.task,
          completed: action.completed
        };
        return Object.assign({}, state, {todos: [...state.todos, newTodo]});

        case 'TOGGLE':
          const toggleList = state.todos.slice();
          const toggleObj = Object.assign({}, state, {todos: toggleList});
          let ind = 0;
          toggleObj.todos.forEach(function(item, index) {
            if(item.id === action.id) ind = index;
          })
          toggleObj.todos[ind].completed = action.completed;

          return toggleObj;

        case 'REMOVE':
          const list = state.todos.slice();
          const rmObj = Object.assign({}, state,{todos: list});
          let ind2 = 0;
          rmObj.todos.forEach(function(item, index) {
            if(item.id === action.id) ind2 = index;
          })
          rmObj.todos.splice(ind2,1);
          return rmObj;

        case 'COMPLETED':
          state.filter = true;
          console.log(state);
          return state;

        case 'UNCOMPLETED':
          state.filter = false;
          return state;

       default:
           return state;
   }
};

export default reducer;
