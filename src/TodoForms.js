import React, { Component } from "react";
import uuid from "uuid";

class TodoListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo({ ...this.state, id: uuid() });
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="task">New Todo </label>
        </div>

        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}
export default TodoListForm;
