import { addTodo } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return [...state, {
      id: action.id,
      task: action.task,
      completed: action.completed
    }];

    default:
    return state;
  }
};
