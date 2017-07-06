const addTodo = (id,task) => {
	return {
		type: 'ADD_TODO',
		id,
		task,
		completed: false,
		display: true
	};
}

const handleToggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
}

const handleRemoveTodo = (id) => {
	return {
		type: 'REMOVE_TODO',
		id
	}
}

const handleFilterToggle = (showCompleted) => {
	return {
		showCompleted,
		type: 'TOGGLE_FILTER'
	}
}

export {
	addTodo,
	handleToggleTodo,
	handleRemoveTodo,
	handleFilterToggle
};