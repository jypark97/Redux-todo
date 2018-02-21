const reducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
        visible: true
      }
      return state.concat(newTodo);
    case 'TOGGLE':
      // debugger;
      let newstate = state.slice();
      for(let i=0; i< newstate.length; i++){
        if(newstate[i].id === action.id){
          newstate[i].completed = !newstate[i].completed;
          break;
        }
      }
      return newstate;
    case 'DELETE':
      newstate = state.slice();
      for(let i=0; i<newstate.length; i++){
        if(newstate[i].id === action.id){
          newstate.splice(i,1);
        }
      }
      // newstate.findIndex((todo) => todo.id === action.id);
      return newstate;
    case 'FILTER':
      // debugger;
      let setting = () => true;
      if(action.filter === 'completed'){
        setting = (completed) => completed;
      }else if(action.filter === 'active'){
        setting = (completed) => !completed;
      }

      return state.map((todo) => {
        todo.visible = setting(todo.completed);
        return todo;
      });
      // switch(action.filter){
      //   case 'all':
      //     return state.map((todo) => {
      //       todo.visible = true;
      //       return todo;
      //     });
      //   case 'completed':
      //     return state.map((todo) => {
      //       todo.visible = todo.completed ? true: false;
      //       return todo;
      //     });
      //   case 'active':
      //     return state.map((todo) => {
      //       todo.visible = !todo.completed ? true: false;
      //       return todo;
      //     });
      //   default:
      //     return state;
      // }
    default:
      return state;
  }
}

export default reducer;
