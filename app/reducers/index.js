
const toggleHelper = (toggleId, arr) => {
  arr.forEach(task => {
    if(task.id === toggleId){
      task.completed = !task.completed;
    }
  });
}

// state machine
const reducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      const newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      newState.push(newTodo);
      return newState;
    case 'TOGGLE_TODO':
      const newState1 = [...state];
      toggleHelper(action.toggleId, newState1);
      return newState1;
    case 'REMOVE_TODO':
      console.log('remove');
      let newState2 = [...state];
      newState2 = newState2.filter( (task) => (task.id !== action.removeId) )
      return newState2;
    default:
      return state;
  }
}

export default reducer;
