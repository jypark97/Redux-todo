import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import reducer from './reducers/index';
//import action creator for dispatch usage
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

// ReactDOM.render(<TodoApp />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
  ,
  document.getElementById('root')
);
