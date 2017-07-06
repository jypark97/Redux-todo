//reducers
const reducer = (state = {todos: [], currentFilter: "All"}, action) => {
   switch (action.type) {
       case 'ADD_TODO':
           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed,
               display: true
           };
           const newState = Object.assign({},state, {todos: state.todos.concat([newTodo])});//[ ...state ];
           return newState;
       case 'TOGGLE_TODO':
        let toggleTodos = [...state.todos];
        toggleTodos.forEach(function(todo) {
          if(todo.id == action.id){
            todo.completed = !todo.completed
          }
        })
        let toggleState = Object.assign({},state, {todos: toggleTodos});
        return toggleState;
      case 'REMOVE_TODO':
        let removeTodos = [...state.todos];
        let i = -1;
        removeTodos.forEach(function(todo, index) {
          if(todo.id == action.id){
            i=index;
          }
        })
        if(i!==-1){
          removeTodos.splice(i,1);
        }
        const removedState = Object.assign({}, state, {todos: removeTodos});
        return removedState;
      case 'FILTER_TODO':
        let filteredState = Object.assign({},state, {todos: state.todos});
        filteredState.currentFilter = action.filterby;
      return filteredState;

       default:
           return state;
   }
};
export default reducer;
