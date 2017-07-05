import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

// linking reducer to store
let store = createStore(reducer);


ReactDOM.render(<Provider store={store}>
                  <TodoApp /> 
                </Provider>, document.getElementById('root'));
