const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
        display: true
      };
      newState.push(newTodo);
      return newState;

    case 'TOGGLE_STRIKE':
      const newState2 = [...state];
      return newState2.map((each) => {
        if (each.id === action.id){
          each.completed = !each.completed
        }
        return each;
      });

    case 'REMOVE':
      const newState3 = [...state];
      return newState3.filter((each) => each.id !== action.id)

    case 'FILTER':
      const newState4 = [...state];
      console.log(action.filterBy === "true")
      if (action.filterBy === 'all'){
        newState4.map((each) => each.display = true)
      } else if (action.filterBy === "true"){
        newState4.map((each) => each.completed === true ? each.display = true : each.display = false)
      } else {
        newState4.map((each) => each.completed === false ? each.display = true : each.display = false)
      }
      return newState4;

    default:
      return state;
  }
}

export default reducer;
