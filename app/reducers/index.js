// Inside app/reducers/index.js
const reducer = (state = [], action) => {
   switch (action.type) {
       case "ADD_TODO":
       // copy new state so no mutations to old state
         const newState = [ ...state ];
         // create the todo from the action object
         const newTodo = {
             id: action.id,
             task: action.task,
             completed: action.completed,
             display: true
         };
         // okay to mutate our own copy
         newState.push(newTodo);
         return newState;
       case "REMOVE_TODO":
         return state.filter(todo=>todo.id!==action.id);
       case "TOGGLE_TODO":
         return state.map(todo => {
           if(todo.id === action.id){
             todo.completed = !todo.completed;
           }
           return todo;
         });
       case "SHOW_COMPLETED":
         return state.map(todo=>{
           if(todo.completed){
             todo.display = true;
           }else{todo.display = false;}
           return todo;
         });
       case "SHOW_UNCOMPLETED":
         return state.map(todo=>{
           if(!todo.completed){
             todo.display = true;
           }else{todo.display = false;}
           return todo;
         });
       default:
           return state;
   }
};

export default reducer; //why we need the default
