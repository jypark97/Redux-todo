const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                id: action.id,
                task: action.task,
                completed: action.completed
            };
            return [...state, newTodo];
        case 'TOGGLE':
            let index = state.findIndex(todo => todo.id === action.id);
            let newState = [... state];
            let changedTodo = Object.assign(state[index], 
                {completed: !state[index].completed});
            newState[index] = changedTodo;
            return newState;
        case 'REMOVE':
            newState = state.filter(todo => todo.id !== action.id);
            return newState;
        case 'FILTER':
            newState = state.filter(todo => todo.completed === action.completed);
            return newState;
        default:
            return state;
    }
 };
 
 export default reducer;