const reducer = (state = [], action) => {
  let newTodos, newTodo;

  switch(action.type) {
    case 'ADD_TODO':
      newTodos = [...state];
      newTodo = {
        id: action.id,
        task: action.task,
        completed: action.completed,
      }
      newTodos.push(newTodo);
      return newTodos;

    case 'TOGGLE_TODO':
      newTodos = [...state];
      newTodos[action.id].completed = !state[action.id].completed
      return newTodos;

    case 'DELETE_TODO':
      //code here to return new todo list with action.id deleted
      newTodos = [...state];
      let ret = newTodos.filter((todo) => todo.id !== action.id)
      return ret;
      
    default:
      return state;
  }
}

export default reducer;
