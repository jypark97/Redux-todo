import React from 'react';

const Filter = ({handleFilterComplete,handleFilterImcomplete}) => {
  return (
    <div>
      <button onClick={handleFilterComplete}>
        Filter Completed Tasks
      </button>
      <button onClick={handleFilterImcomplete}>
        Filter Imcompleted Tasks
      </button>
    </div>
  );
}

export default Filter;
