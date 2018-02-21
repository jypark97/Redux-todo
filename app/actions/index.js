// let id_seed = Math.floor(Math.random()*5000)+1;
// const genID = () =>{
//   const newID = id_seed;
//   id_seed++;
//   return newID;
// }

const addTodo = (id, task) => {
  return {
    type: 'ADD_TODO',
    id,
    task,
    completed: false
  }
}

const completedTask = (id) => {
  return {
    type: 'TOGGLE',
    id
  }
}

const deleteTask = (id) =>{
  return {
    type: 'DELETE',
    id
  }
}

const filterTask = (filter) =>{
  return{
    type: 'FILTER',
    filter
  }
}

export {addTodo, completedTask, deleteTask, filterTask};
