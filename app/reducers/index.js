import _ from 'underscore';

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
        let newState = [...state];

        const newTodo = {
          id: action.id,
          task: action.task,
          completed: action.completed
        };

        newState.push(newTodo);
        return newState;

    case 'TOGGLE_TODO':
        newState = [...state];
        let todo = newState[action.id];

        newState[action.id].completed = !newState[action.id].completed;
        return newState;

    default:
        return state;
  }
}

export  default reducer;
