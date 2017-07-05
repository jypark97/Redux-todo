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

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="New Task"
          onChange={(event) => this.handleChange(event)}
          value={this.state.task}
        />
        <div className = "btn" id = "newTodo" onClick={() => this.handleSubmit()}>Add Todo</div>
      </div>
    )
  }
}

export default InputLine;
