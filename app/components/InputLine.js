import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = { task: '' };
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit() {
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }
  handleFilter(){
    this.props.handleFilter()
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
        <button onClick={() => this.handleSubmit()}>Add Todo</button>
        <button onClick={() => this.handleFilter()}>Filter </button>
      </div>
    )
  }
}

export default InputLine;
