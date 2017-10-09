import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Task..."
          onChange={(event) => this.handleChange(event)}
          value={this.state.task}
        />
        <button
          onClick={(e) => this.handleSubmit(e)}>Add Todo
        </button>
      </form>
    )
  }
}

export default InputLine;
