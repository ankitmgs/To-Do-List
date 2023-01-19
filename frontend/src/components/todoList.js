import React from "react";

const todoList = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div
          className="card m-5 p-5"
          style={{ border: "1px solid black", width: "50rem" }}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Enter Title"
          />

          <button className="btn btn-primary mt-3">Add</button>
        </div>
      </div>
    </div>
  );
};

export default todoList;
