import React from 'react';
import TextField from 'material-ui/TextField';

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
      <div className="row">
        <input
          placeholder="New Task"
          onChange={(event) => this.handleChange(event)}
          value={this.state.task}
        />
        <button className="waves-effect waves-light btn red" onClick={() => this.handleSubmit()}>Add Todo</button>
      </div>
    )
  }
}

export default InputLine;
