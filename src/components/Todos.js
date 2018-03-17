import React, { Component } from "react";

export default class Todos extends Component {
  state = {
    todos: [],
    currentTodo: ""
  };

  handleInputChange = event => {
    this.setState({ currentTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      name: this.state.currentTodo,
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      currentTodo: ""
    });
  };

  render() {
    return (
      <form className="container text-center" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={this.handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    );
  }
}
