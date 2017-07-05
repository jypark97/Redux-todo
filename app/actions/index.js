export function addTodo(id, taskString){
  console.log('Add to do' , id)
  return{
    type: 'ADD_TODO',
    id: id,
    task: taskString,
    completed: false
  };
}

export function toggleTodo(id){
  console.log(id)
  return{
    type: 'STRIKE_TODO',
    id: id
  };
}

export function removeTodo(id){
  console.log(id)
  return{
    type: 'REMOVE_TODO',
    id: id
  };
}

export function filterTodo(complete){

  if( complete === 'complete'){
    return {
      type: 'COMPLETE_TODO',
    }
  }else if (complete === 'incomplete'){
    return {
      type: 'INCOMPLETE_TODO',
    }
  }else{
    return{
      type: 'ALL_TODO'
    }
  }
}
