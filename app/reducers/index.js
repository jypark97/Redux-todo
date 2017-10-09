
const defaultState = []

const reducer = (state= defaultState, action) =>{
  switch(action.type){
    case 'ADD_TODO':
      const newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      }
      newState.push(newTodo);
      return newState;
    case 'TOGGLE_TODO':
      const anotherState =[...state];
      anotherState[action.id].completed = anotherState[action.id].completed ? false: true;
      return anotherState
    case 'REMOVE_TODO':
      const removeState = [...state];
      removeState.splice(action.id, 1);
      return removeState;
    default:
      return state;
  }
}

export default reducer;
