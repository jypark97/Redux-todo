//where we define our root reducer

const reducer = (state = [], action) => {
   switch (action.type) {
     case 'ADD_TODO':
        const newState = [...state];
        const newTodo = {
          id: action.id,
          task: action.task,
          completed: action.completed
        }
        newState.push(newTodo);
        console.log(newState)
        return newState;
       // Missing cases
     case 'TOGGLE_TODO':
        return state.map((item) => {
          if(item.id === action.id){
            return Object.assign({}, item, {completed: !item.completed});
          } else {
            return item
          }
        })
     case 'REMOVE_TODO':
        const nuState = [...state]
        const index = nuState.findIndex(function(todo){
          if(action.id === todo.id){
            return true;
          }
        })
        const toReturn = [...nuState.slice(0, index), ...nuState.slice(index+1)]
        return toReturn
     default:
        return state;
   }
};

export default reducer;
