import React from "react";

const todoList = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div
          className="card m-5 p-5"
          style={{ width: "50rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Enter Title"
          />

          <button className="btn btn-primary mt-3">Add</button>

          <hr />

          <div className="card">
            <div className="row">
              <div className="col-2">
                <div className="d-flex justify-content-center">
                  <input className="mt-3" type="checkbox" />
                </div>
              </div>
              <div className="col-6">
                <p className="mt-1" style={{ fontSize: "1.5rem" }}>Baby I love You</p>
              </div>
              <div className="col-4">
                <button className="mt-2 btn btn-danger ml-4">Delete</button>
                <button className="mt-2 btn btn-info ml-4">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default todoList;
