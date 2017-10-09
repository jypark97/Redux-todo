const addTodo = (id, task) => ({
  type: 'ADD_TODO',
  id,
  task,
  completed: false
});

const toggleTodo = (id) => ({
  type: 'TOGGLE',
  id
});

const removeTodo = (id) => ({
  type: 'REMOVE',
  id
})

module.exports = {
  addTodo,
  toggleTodo,
  removeTodo
}
