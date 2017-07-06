const initialState = [];

const reducer = (state = initialState, { type, id, task, completed }) => {
  switch (type) {
    case "ADD_TODO":
      const newState = [...state];
      newState.push({id, task, completed});
      return newState;
    case "TOGGLE_TODO":
      const newArr = [...state];
      const i = newArr.findIndex(el => el.id === id);
      newArr[i].completed = !newArr[i].completed;
      return newArr;
    case "DELETE_TODO":
      return state.filter(el => el.id !== id);
    default:
      return state;
  }
};

export default reducer;
