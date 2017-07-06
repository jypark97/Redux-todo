import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import {createStore} from 'redux';
import reducer from './reducers/index';
import {Provider} from 'react-redux';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
