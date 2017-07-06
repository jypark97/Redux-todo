import React from 'react';

class FilterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit() {
    this.props.submit(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="task"
          onChange={(event) => this.handleChange(event)}
          value={this.state.task}
        />
        <button onClick={() => this.handleSubmit()}>Filter Todos</button>
      </div>
    )
  }
}

export default FilterBox;
