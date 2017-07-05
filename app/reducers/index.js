//define root reducer
const reducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_TODO':
      let newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      newState.push(newTodo);
      return newState;

      case 'CROSS_TODO':
        let arr = state.slice();
        for (var i =0; i < arr.length; i++){
          if(arr[i].id === action.id){
            arr[i].completed = action.completed;
            break;
          }
        }
        return arr;

      case 'REMOVE_TODO':
      let arr2 = state.slice();
      for (var i =0; i < arr2.length; i++){
        if(arr2[i].id === action.id){
          arr2.splice(i, 1)
          break;
        }
      }
      return arr2;


    default:
      return state;
  }
}
export default reducer;
