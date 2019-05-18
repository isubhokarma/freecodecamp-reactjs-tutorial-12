import React from "react";
import TodoList from "./TodoList";
import todosData from "./todosData";
import Navbar from "./Navbar";

const App = () => {
  const todoComponents = todosData.map(item => (
    <TodoList key={item.id} item={item} />
  ));

  return (
    <div className="container">
      <Navbar />
      {todoComponents}
    </div>
  );
};

export default App;
