const initialState = {
  todos: [],
  filterFunction: (el) => el
};

const reducer = (state = initialState, { type, id, task, completed }) => {
  let newTodos = [...state.todos];
  let newFilterFunction = state.filterFunction.bind({});
  switch (type) {
    case "ADD_TODO":
      newTodos.push({id, task, completed});
      return {todos: newTodos, filterFunction: newFilterFunction};
    case "TOGGLE_TODO":
      const i = newTodos.findIndex(el => el.id === id);
      newTodos[i].completed = !newTodos[i].completed;
      return {todos: newTodos, filterFunction: newFilterFunction};
    case "DELETE_TODO":
      newTodos = newTodos.filter(el => el.id !== id);
      return {todos: newTodos, filterFunction: newFilterFunction};
    case "SHOW_ALL":
      newFilterFunction = (el) => el;
      return {todos: newTodos, filterFunction: newFilterFunction}
    case "SHOW_COMPLETE":
      newFilterFunction = (el) => el.completed;
      return {todos: newTodos, filterFunction: newFilterFunction}
    case "SHOW_UNCOMPLETE":
      newFilterFunction = (el) => !el.completed;
      return {todos: newTodos, filterFunction: newFilterFunction}
    default:
      return state;
  }
};

export default reducer;
