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

  addTodo = (newtodos) => {
    this.setState({
      todos: [...this.state.todos, newtodos]
    });
  };

  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id)
    });
  };

  // update my todo
  update = (id, updatedTask) => {
    const updatedTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodo });
  };
  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          updateTodo={this.update}
        />
      );
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
