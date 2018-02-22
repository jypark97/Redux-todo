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
    if (this.state.task.trim()) {
      this.props.addTodo(this.state.task);
      this.setState({ task: '' });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="task"
            onChange={(event) => this.handleChange(event)}
            value={this.state.task}
          />

          <input type="submit" value="Add Todo" />
        </form>
      </div>
    )
  }
}

export default InputLine;
