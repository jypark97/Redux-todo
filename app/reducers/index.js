// Inside app/reducers/index.js
const reducer = (state = {todos:[],filter:false}, action) => {
   switch (action.type) {
       case 'ADD_TODO':


           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed
           };
           const newTodos = [...state.todos];
           newTodos.push(newTodo)
           const newState = Object.assign({},state, {todos:newTodos});


           return newState
       case 'COMPLETE':
          const currentState = Object.assign({},state);
          const changedState = currentState.todos.map((item)=>{
            if (action.id === item.id){
              item.completed = !(item.completed)
            }
            return item;
          })
          currentState.todos = changedState
          return currentState
       case 'REMOVE':
          const todoList = [...state.todos];
          todoList.splice(todoList.indexOf(action.id),1);
          const curState = Object.assign({},state, {todos:todoList});
          return curState;
       case 'FILTER':
          const cuState = Object.assign({},state);
          cuState.filter = !(cuState.filter)
          return cuState
       default:
           return state;
   }
};

export default reducer;
