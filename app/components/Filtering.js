import React from 'react';

const Filtering = ({handleFilter}) => {
  return (
    <div style={{display: 'inline-block'}}>
      Filter by:
      <button onClick={()=>handleFilter('all')}>All</button>
      <button onClick={()=>handleFilter('completed')}>Completed</button>
      <button onClick={()=>handleFilter('active')}>Active</button>
    </div>
  )
}

export default Filtering;
