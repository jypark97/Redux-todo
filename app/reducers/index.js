const initialState = { complete: [],
  incomplete: [],
  all: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    const newState = [...state.all];
    const newStateI = [...state.incomplete];
    const newTodo = {
      id: action.id,
      task: action.task,
      completed: action.completed
    };
    newState.push(newTodo)
    newStateI.push(newTodo)
    const newAddState = { complete: state.complete.slice(),
      incomplete: newStateI,
      all: newState
    }
    return newAddState
    /// add starts here
    case 'STRIKE_TODO':
    const newToDoI = [...state.incomplete];
    const newToDoC = [...state.complete];
    for(var i = 0 ; i < newToDoI.length ; i ++){
      if(newToDoI[i].id === action.id){
        newToDoI[i].completed = !newToDoI[i].completed
        newToDoC.push(newToDoI[i])
        newToDoI.splice(i,1)
        return {
          complete: newToDoC,
          incomplete: newToDoI,
          all: state.all.slice()
        }
      }
    }
    for(var i = 0 ; i < newToDoC.length ; i ++){
      if(newToDoC[i].id === action.id){
        newToDoC[i].completed = !newToDoC[i].completed
        newToDoI.push(newToDoC[i])
        newToDoC.splice(i,1)
        return {
          complete: newToDoC,
          incomplete: newToDoI,
          all: state.all.slice()
        }
      }
    }
    throw new Error ('ID Cannot be found')
  // ends here
  // remove added here
  case 'REMOVE_TODO':
  const newToDoRemoveAll = [...state.all];
  const newToDoRemoveC = [...state.complete];
  const newToDoRemoveI = [...state.incomplete];
  const removeArr = [newToDoRemoveC, newToDoRemoveI, newToDoRemoveAll]
  for(var i = 0 ; i < removeArr.length ; i ++){
    for(var j = 0 ; j < removeArr[i].length ; j ++){
      if(removeArr[i][j].id === action.id){
        removeArr[i].splice(j,1)
      }
    }
  }
  return {
    complete: removeArr[0],
    incomplete: removeArr[1],
    all: removeArr[2]
  }
  // end here

  case 'COMPLETE_TODO':
  console.log('state complete', state.complete)
  return {
    complete: state.complete.slice(),
    incomplete: state.incomplete.slice(),
    all: state.all.slice(),
    status: 'complete'
  }

  case 'INCOMPLETE_TODO':
  return {
    complete: state.complete.slice(),
    incomplete: state.incomplete.slice(),
    all: state.all.slice(),
    status: 'incomplete'
  }
  // console.log(state)
  //     const newToDoI = [...state];
  //     const newArrI = newToDoI.filter(function(todo){
  //       return !todo.completed
  //     })
  //     return newArrI
  case 'ALL_TODO':
  return {
    complete: state.complete.slice(),
    incomplete: state.incomplete.slice(),
    all: state.all.slice(),
    status: 'all'
  }
  // console.log(state)
  //   const newToDoA = [...state];
  //   return newToDoA

  default:
  return state;
}
}

export default reducer;
