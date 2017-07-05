const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newState = [...state]
            const newTodo = {
                id: action.id,
                task: action.task,
                completed: action.completed
            }
            newState.push(newTodo)
            return newState
        }
        case 'CHANGE_STATUS': {
            let newState = [...state]
            newState[action.id].completed = !newState[action.id].completed;
            return newState;
        }
        case 'DELETE_TODO': {
            let newState = state.slice(0, action.id).concat(state.slice(action.id +1, state.length))
            return newState;
        }
        default:
            return state;
    }
};

export default reducer;