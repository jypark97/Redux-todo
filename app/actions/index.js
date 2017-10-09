const addTodo = (id, task) => ({
  type: 'ADD_TODO',
  id,
  task,
  completed: false
});

const toggleTodo = (id) => ({
  type: 'TOGGLE',
  id
})

module.exports = {
  addTodo,
  toggleTodo
}
