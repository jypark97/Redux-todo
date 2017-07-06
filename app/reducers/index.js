const initialState = {
  allTodos: [],
  displayedTodos: []
};

const reducer = (state = initialState, { type, id, task, completed, filterText }) => {
  const newAllTodos = [...state.allTodos];
  const newDisplayedTodos = [...state.allTodos];

  switch (type) {
    case "ADD_TODO":
      newAllTodos.push({id, task, completed});
      return {allTodos: newAllTodos};
    case "TOGGLE_TODO":
      const i = newAllTodos.findIndex(el => el.id === id);
      newAllTodos[i].completed = !newAllTodos[i].completed;
      return {allTodos: newAllTodos}
    case "DELETE_TODO":
      newAllTodos = newAllTodos.filter(el => el.id !== id);
      return {allTodos: newAllTodos};
    case "SHOW_ALL":
      newDisplayedTodos = newAllTodos;
      return {displayedTodos: newDisplayedTodos}
    case 'SHOW_COMPLETED':
      newDisplayedTodos = newAllTodos.filter(el => el.completed === "completed");
      return {displayedTodos: newDisplayedTodos}
    case 'SHOW_UNCOMPLETED':
      newDisplayedTodos = newAllTodos.filter(el => el.completed === "uncompleted");
      return {displayedTodos: newDisplayedTodos}
    case 'FILTER_BY_TEXT':
      newDisplayedTodos = newAllTodos.filter(el => el.indexOf(filterText) > -1);
      return {displayedTodos: newDisplayedTodos}
    default:
      return state;
  }
};

export default reducer;
