const reducer = (state = [], action) => {
  let newState = null;
  switch (action.type) {
    case 'ADD_TODO':
      // copy new state so no mutations to old state
      newState = [...state];
      // create the todo from the action object
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
        show: action.show
      };
      // okay to mutate our own copy
      newState.push(newTodo);
      return newState;
    case 'TOGGLE':
      newState = [...state];
      newState.forEach(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
      });
      return newState;
    case 'REMOVE':
      newState = [...state];
      let index = 0;
      newState.forEach((todo, foundIndex) => {
        if (todo.id === action.id) {
          index = foundIndex;
        }
      });
      newState.splice(index, 1);
      return newState;
    case 'SHOW':
    newState = [...state];
      switch (action.filter) {
        case 'all':
          return newState.map(item => {
            item.show = true;
            return item;
          });
        case 'completed':
          return newState.map(item => {
            if (item.completed) {
              item.show = true;
            } else {
              item.show = false;
            }
            return item;
          });
        case 'not completed':
        newState = newState.map(item => {
          console.log("item show", item.show);
          if (item.completed) {
            item.show = false;
          } else {
            item.show = true;
          }
          return item;
        });
        console.log("newState!", newState);
        return newState;
      }
    default:
      return state;
  }
};

export default reducer;
