import React from "react";

const TodoList = props => {
  return (
    <div className="container">
      <div className="row p-1">
        <div className="col-6 d-flex justify-content-center bg-info text-white align-items-center">
          <input
            type="checkbox"
            checked={props.item.completed}
            onChange={e => props.handleChange(props.item.id)}
          />
          <h5 className="font-weight-normal">{props.item.text}</h5>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
