import React from 'react';
import { connect } from 'react-redux'

import { toggle } from '../actions/index'
import { remove } from '../actions/index'

let Todo = ({task, id, completed, toggleClick, removeClick, display}) => {
  return (
    <li style={display ? {'display':  ""} : {"display":'none'}}>
      <span onClick={ () => toggleClick(id) }>
        { completed ? <strike>{task}</strike> : task }
      </span>
      <button onClick={ () => removeClick(id) }>Remove</button>
    </li>
  );
}

// const mapStateToProps = (state) => ({
//
// })

const mapDispatchToProps = (dispatch) => ({
  toggleClick: (id) => {
    dispatch(toggle(id));
  },
  removeClick: (id) => {
    dispatch(remove(id));
  },
})

Todo = connect(null, mapDispatchToProps)(Todo)

export default Todo;
