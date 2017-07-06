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
          placeholder="task"
          onChange={(event) => this.handleChange(event)}
          value={this.state.task}
        />
        <button onClick={() => this.handleSubmit()}>Add Todo</button>
        <div>
        {/* <button onClick={() => this.handleCompleted()}>All Completed</button>
        <button onClick={() => this.handleUncompleted()}>All Uncompleted</button> */}
        </div>
      </div>
    )
  }
}

export default InputLine;
