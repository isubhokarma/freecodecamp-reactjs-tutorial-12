import React, { Component, Fragment } from "react";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
};

export default App;
