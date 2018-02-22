const addTodo = (id, task, completed = false) => ({
    type: 'ADD_TODO',
    id,
    task,
    completed
});

const toggle = id => ({type: 'TOGGLE', id});
const remove = id => ({type: 'REMOVE', id});
const filter = completed => ({type: 'FILTER', completed});

export {addTodo, toggle, remove, filter};