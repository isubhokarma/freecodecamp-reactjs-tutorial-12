import React from "react";

const TodoList = () => {
  return (
    <div className="container">
      <div className="row p-1">
        <div class="col-6 d-flex justify-content-center bg-info text-white align-items-center">
          <input type="checkbox" />
          <h5 className="font-weight-normal">Tasks</h5>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
