const defaultState = []

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case "ADD_TODO":
      const newState = [...state];
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
        display: true,
      }
      newState.push(newTodo);
      return newState;

    case "TOGGLE":
      return state.map( (item, index) => {
        if (item.id === action.id) item.completed = !item.completed
        return item
      } )

    case "REMOVE":
      return state.filter( (item, index) => (item.id !== action.id))

    case "FILTER":
      let filterState = [...state]

      if (action.filter === 'all') {
        filterState = filterState.map( (todo) => (Object.assign({}, todo, {display: true})) )
      }
      else if (action.filter === "completed") {
        filterState = filterState.map( (todo) => (Object.assign({}, todo, {display: (todo.completed ? true : false)})) )
      }
      else if (action.filter === "uncompleted") {
        filterState = filterState.map( (todo) => (Object.assign({}, todo, {display: (todo.completed ? false : true)})) )
      }

      return filterState;

    default:
      return state;
  }
}

export default reducer;
