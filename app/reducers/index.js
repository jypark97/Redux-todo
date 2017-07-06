const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newState = state.slice();
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      }
      newState.push(newTodo)
      return newState
    case "TOGGLE_TODO":
      const newState2 = state.map((item)=>((item.id===action.id)?Object.assign({},item,{completed:!item.completed}):item));
      return newState2
    case "REMOVE_TODO":
      const newState3 = [...state];
      newState3.splice(newState3.findIndex((item)=>(item.id===action.id)),1);
      return newState3
    default:
      return state;
  }
};

export default reducer;
