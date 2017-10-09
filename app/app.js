import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
  <TodoApp />
  </Provider>,
  document.getElementById('root'));
