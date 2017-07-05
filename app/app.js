import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import reducer from './reducers/index'
import { createStore } from 'redux'
import { provider } from 'react-redux'

ReactDOM.render(<TodoApp />, document.getElementById('root'));
