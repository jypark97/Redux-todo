// ACTION CREATORS are functions that create action objects

const addTodo = (id, taskString) => {
  return {
    type: 'ADD_TODO',
    task: taskString,
    id: id,
    completed: false,
  };
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    toggleId: id,
  };
}

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    removeId: id,
  }
}

export {addTodo, toggleTodo, removeTodo};
