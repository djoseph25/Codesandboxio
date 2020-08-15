import React, { Component } from "react";
// import "./Box.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    // I am adding a state to be able to edit
    this.state = {isEditing: false};
  }

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  
  render() {
// adding edit logic
let result;
if(this.state.isEditing){
result=(
<div>
  <form>
    <input type='text'/>
    </form>
</div>
)} else{
  // move my div to 

}
    return (
      <div>
        <li> {this.props.task}</li>
        <button>Edit</button>
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}

export default Todo;
