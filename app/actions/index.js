export function addTodo(id, task) {
    return {
        type: 'ADD_TODO',
        id,
        task,
        completed: false
    };
}

export function changeStatus(id) {
    return {
        type: 'CHANGE_STATUS',
        id
    }
}

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    }
}