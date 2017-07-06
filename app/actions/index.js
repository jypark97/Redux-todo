export let addTodo = (id,todoStr) => ({
  type: "ADD_TODO",
  task: todoStr,
  id: id,
  completed: false
})

export let toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id
})

export let removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id
})
