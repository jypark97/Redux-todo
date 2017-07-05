import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import reducer from './reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

// ReactDOM.render(<TodoApp />, document.getElementById('root'));

ReactDOM.render(
   <Provider store={store}>
       <TodoApp />
   </Provider>
   ,
   document.getElementById('root')
);
