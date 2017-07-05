import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

//ADDED BY ME
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index.js';

//link reducer to store
let store = createStore(reducer);


//add provider part to link store to components
ReactDOM.render(

  <Provider store = {store}>
    <TodoApp />
  </Provider>

  , document.getElementById('root'));
