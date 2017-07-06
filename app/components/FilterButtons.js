import React from 'react';
import ReactDOM from 'react-dom';

const FilterButtons = ({showAll, showComplete, showUncomplete}) => {
    return (
      <div>
        <button onClick={showAll}>
          Show All
        </button>
        <button onClick={showComplete}>
          Show Completed
        </button>
        <button onClick={showUncomplete}>
          Show Uncompleted
        </button>
      </div>
    );
}

export default FilterButtons;
