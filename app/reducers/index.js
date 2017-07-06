const initialState = {currentTasks:[],allTasks:[]}

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case 'ADD_TODO':
           // copy new state so no mutations to old state
           let allTask = [ ...state.currentTasks ];
           // create the todo from the action object
           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed
           };
           // okay to mutate our own copy
           allTask.push(newTodo);
           let newState = Object.assign({},state,{currentTasks:allTask,allTasks:allTask})
           return newState
        case 'TOGGLE_TODO':
          let allTask2 = [...state.currentTasks];
          for (var i=0;i<state.allTasks.length;i++) {
            if (state.allTasks[i].id.toString() === action.id.toString()) {
              allTask2[i].completed = (!state.allTasks[i].completed);
              break;
            }
          }
          let newState2 = Object.assign({},state,{currentTasks:allTask2,allTasks:allTask2})
          return newState2;
        case 'REMOVE_TODO':
          let allTask3 = [...state.currentTasks];
          allTask3.splice(action.id,1);
          let newState3 = Object.assign({},state,{currentTasks:allTask3, allTasks:allTask3})
          return newState3;
        case 'FILTER_TODO_COMPLETED':
          let filteredTask = [...state.allTasks];
          filteredTask = filteredTask.filter(task=>{
            return task.completed ? true:false
          });
          let newState4 = Object.assign({},state,{currentTasks:filteredTask})
          return newState4;
        case 'FILTER_TODO_IMCOMPLETED':
          let filteredTask2 = [...state.allTasks];
          filteredTask2 = filteredTask2.filter(task=>{
            return task.completed ? false:true
          });
          let newState5 = Object.assign({},state,{currentTasks:filteredTask2})
          return newState5;
       default:
           return state;
   }
};

export default reducer;
