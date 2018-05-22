import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers/index";

let store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
       <TodoApp />
   </Provider>
   ,
   document.getElementById('root')
);
