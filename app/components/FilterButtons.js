import React from 'react';
import ReactDOM from 'react-dom';

const FilterButtons = ({showAll, showCompleted, showUncompleted}) => {
  render() {
      return (
        <div>
          <button onClick={showAll}>
            Show All
          </button>
          <button onClick={showCompleted}>
            Show Completed
          </button>
          <button onClick={showUncompleted}>
            Show Uncompleted
          </button>
        </div>
      )
    }
}


export default FilterButtons;
