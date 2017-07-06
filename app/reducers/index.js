
const reducer = (state = [], action) => {
   switch (action.type) {

       case 'ADD_TODO':
           let newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed
           };
           return [ ...state, newTodo ];

      case 'DELETE_TODO':
            return [...state].filter((todo) => todo.id !== action.id);

      case 'TOGGLE_TODO':
          let toggleState = [ ...state ];
          let i;

          toggleState.forEach(function(task, index){
            if(task.id === action.id)
              i = index;
          })
          state[i].completed = !state[i].completed

          return toggleState;
          });

       default:
           return state;
   }
};

export default reducer;
