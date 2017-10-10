import React from 'react'

import { connect } from 'react-redux'

import { filterTodos } from '../actions/index';

let TodoFilter = ({filterClick}) => {
  return (
    <div>
      <select onChange={(e) => filterClick(e)}>
        <option value='all'>Show All</option>
        <option value='completed'>Show Completed</option>
        <option value='uncompleted'>Show Uncompleted</option>
      </select>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//
// })

const mapDispatchToProps = (dispatch) => ({
  filterClick: (e) => {
    dispatch(filterTodos(e.target.value))
  },
})

TodoFilter = connect(null, mapDispatchToProps)(TodoFilter)

export default TodoFilter
