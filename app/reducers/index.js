const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: false,
      }
      return [...state, newTodo]
    case 'TOGGLE_TODO':
      let newState = state.map((task) => {
        if (action.id === task.id)
          task.completed = !task.completed
        return task
      })
      return newState
    case 'REMOVE_TODO':
       newState = state.filter((task) => {
        return action.id !== task.id
      })
      return newState;
    default:
      return state;
  }
};

export default reducer
