const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newState = [...state];
      const newTodo = {
        id:action.id,
        task:action.task,
        completed: action.complete
      }
      newState.push(newTodo)
      return newState;

    case 'TOGGLE_TODO':
      const newState2 =[...state];
      const currTask = newState2[action.id]
      currTask.completed = !currTask.completed;
      return newState2;

    case 'REMOVE_TODO':
      const n = [...state]
      n.splice(action.id,1)
      n.forEach((todo)=>{
        if(todo.id > action.id){
          todo.id = todo.id-1;
        }
      })
      return n;

    default:
      return state;
  }
};

export default reducer;
