import React, { Component } from "react";
import Todo from "./Todo";
import TodoListForm from "./TodoForms";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

remove=(id)=>{
  this.setState({
    todos: this.state.todos.filter(t => t.id !== id)
  })
}

  addTodo = (newtodos) => {
    this.setState({
      todos: [...this.state.todos, newtodos]
    });
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo 
      key={todo.id}
      id={todo.id}
      task={todo.task}
      removeTodo={this.remove}
      />;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <TodoListForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
