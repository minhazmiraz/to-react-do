import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ content: "" });
  };

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Todo:</label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
