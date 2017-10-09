const reducer = (state = [], action) => {
  switch (action.type) {
    //
    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed
      };
      return state.concat(newTodo);

    case 'TOGGLE':
      const todos = state.slice();
      todos[action.id].completed ^= true;
      return todos;

    case 'REMOVE':
      const list = state.slice();
      list.splice(action.id, 1);
      return list;

    default:
      return state;
  }
}

export default reducer
