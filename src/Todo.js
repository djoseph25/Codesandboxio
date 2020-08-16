import React, { Component } from "react";
// import "./Box.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    // I am adding a state to be able to edit
    this.state = { isEditing: false, task: this.props.task };
  }
  // added handleChange, TogleForm and handle update to be able to edit the todos
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = (evt) => {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    // adding edit logic
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      // move my div to
      result = (
        <div>
          <li> {this.props.task}</li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>x</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
