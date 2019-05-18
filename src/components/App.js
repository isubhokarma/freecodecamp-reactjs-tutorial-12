import React, { Component } from "react";
import TodoList from "./TodoList";
import todosData from "./todosData";
import Navbar from "./Navbar";
import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  render() {
    const todoComponents = this.state.todos.map(item => (
      <TodoList key={item.id} item={item} />
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

//props are hard coded so let's use state but that requires class components
