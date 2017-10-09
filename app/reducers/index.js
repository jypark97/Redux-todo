
const defaultState = {
  todos: [],
  display: 'all'
};

const reducer = (state= defaultState, action) =>{
  switch(action.type){
    case 'ADD_TODO':
      const newState = {...state};
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      }
      newState.todos = [...newState.todos, newTodo];
      return newState;
    case 'TOGGLE_TODO':
      const anotherState ={...state};
      anotherState['todos'][action.id].completed = anotherState['todos'][action.id].completed ? false: true;
      console.log(anotherState);
      anotherState.todos = [...anotherState.todos];
      return anotherState;
    case 'REMOVE_TODO':
      const removeState = {...state};
      removeState['todos'] = removeState['todos'].filter((item, index) => (item.id !== action.id));
      return removeState;
    case 'DISPLAY_CHANGE':
      const displayState = {...state};
      displayState['display'] = action.display;
      console.log(displayState);
      return displayState;
    default:
      return state;
  }
}

export default reducer;
