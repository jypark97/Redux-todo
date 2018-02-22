const reducer = (state = [], action) => {
    switch (action.type) {

        //copy new state & create a newTodo to push to the new state
        //note that it is okay to mutate your own copy
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
            // newState = [...state];
            // console.log(typeof newState);

            return state.map((task) => {
                if(task.id === action.id) {
                    return {...task, completed: !task.completed}
                }
                else {
                    return task;
                }
            })

        case 'DELETE_TODO':
            newState = [...state];

            for(let idx in newState) {
                if(newState[idx].id === action.id) {
                    newState.splice(idx, 1);
                    break;
                }
            }

            return newState; 

        case 'REMOVE_ALL':
            console.log(state);
            return state.filter(task => {
                return !task.completed;
            })

        default:
            return state;
    }
};

export default reducer;
