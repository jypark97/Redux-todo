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
           return Object.assign({},state, {todos: state.todos.concat([newTodo])});//[ ...state ];


       case 'TOGGLE_TODO':
        let toggleTodos = [...state.todos];
        toggleTodos.forEach(function(todo) {
          if(todo.id == action.id){
            todo.completed = !todo.completed
          }
        })
        return Object.assign({},state, {todos: toggleTodos});


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
        return Object.assign({},state, {todos: state.todos, currentFilter: action.filterby});
        // filteredState.currentFilter = action.filterby;
      // return filteredState;

       default:
           return state;
   }
};
export default reducer;
