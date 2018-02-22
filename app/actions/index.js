export function addTodo(id, task) {
    return {
        type: 'ADD_TODO',
        id,
        task,
        completed: false
    };
}

export function handleToggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export function handleDeleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export function removeCompletedTasks() {
    return {
        type: 'REMOVE_ALL'
    }
}