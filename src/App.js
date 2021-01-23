import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };

  handleDelete = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  handleAdd = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo App</h1>
        <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
        <AddTodo handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
