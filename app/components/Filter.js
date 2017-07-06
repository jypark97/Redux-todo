import React from 'react';
const Filter = ({handleCompleted,handleUncompleted}) => {
  return (
    <div>
      <button onClick={handleCompleted}>Show only completed task</button>
      <button onClick={handleUncompleted}>Show only uncompleted task</button>
    </div>
  )
}

export default Filter;
