import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = { task: '' };
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="task"
          onChange={(event) => this.handleChange(event)}
          value={this.state.task}
        />
        <button type="submit">Add Todo</button>
      </form>
      </div>
    )
  }
}

export default InputLine;
