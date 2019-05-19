import React, { Component } from "react";
import TodoList from "./TodoList";
import todosData from "./todosData";
import Navbar from "./Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoComponents = this.state.todos.map(item => (
      <TodoList key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="container">
        <Navbar />
        {todoComponents}
      </div>
    );
  }
}

export default App;
