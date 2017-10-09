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
  handleSelectChange(event){
    this.props.displaySettings(event.target.value);
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

        <select onChange = {(event) => this.handleSelectChange(event)}>
          <option value="all">Display all</option>
          <option value="completed">Completed</option>
          <option value="not-completed"> Show non completed </option>
        </select>
      </div>
    )
  }
}

export default InputLine;
