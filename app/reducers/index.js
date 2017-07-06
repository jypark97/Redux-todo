const reducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			// create new state to keep immutability
			const newState = [...state];
			const newTodo = {
				id: action.id,
				task: action.task,
				completed: action.completed,
				display: true
			}
			newState.push(newTodo);
			return newState;
		case 'TOGGLE_TODO':
			const toggledTaskState = [...state];
			toggledTaskState.forEach((task) => {
				if (action.id === task.id) {
					task.completed = !task.completed
				}
			})
			return toggledTaskState;
		case 'REMOVE_TODO':
			var removedTaskState = [...state];
			for (var i = 0; i < state.length; i++) {
				if (action.id === state[i].id) {
					removedTaskState.splice(i, 1);
				}
			}
			return removedTaskState;
		case 'TOGGLE_FILTER':
			var filteredState = [...state];
			for (var i = 0; i < filteredState.length; i++) {
				if (action.showCompleted) {
					if (filteredState[i].completed) {
						filteredState[i].display = true;
					}
					else {
						filteredState[i].display = false;
					}
				}
				else {
					if (filteredState[i].completed) {
						filteredState[i].display = false;
					}
					else {
						filteredState[i].display = true;
					}
				}
			}
			return filteredState;
		default:
			return state;
	}
}
export default reducer;