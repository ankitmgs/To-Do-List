import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../config";

const TodoList = () => {
  const url = app_config.api_url;
  const [show, setShow] = useState(false);

  const [itemText, setItemText] = useState("");
  const [selected, setSelected] = useState(null);
  const [update, setUpdate] = useState("");
  const [itemsArray, setItemsArray] = useState([]);
  const headers = {"Content-Type": "application/json"}

  const handleUpdate = (id) => {
    
    console.log("jcnsvji",update)
  console.log("sdjkbfshk",id)
  
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify({ "update":`${update}`}),
    headers: { 'Content-Type': 'application/json' },
};
fetch(url + "/todo/update/" + id,requestOptions).then((res)=>{console.log(res)
 return res.json()})
  };

  const showHandler = (e, index) => {
    e.preventDefault();
    if (index !== selected) {
      setShow((show) => !show);
      setSelected(index);
    }

    console.log(index);
  };

  const getItemDataFromBackend = async () => {
    const response = await fetch(url + "/todo/items");
    const data = await response.json();
    console.log(data);
    setItemsArray(data);
  };

  //delete item when click on delete
  const deleteItem = (id) => {
    const reOpt = {
      method: "DELETE",
    };
    fetch(url + "/todo/delete/" + id, reOpt)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
          getItemDataFromBackend();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    getItemDataFromBackend();
  }, []);

  const displayData = () => {
    return;
  };
  const todoItems = {
    item: " ",
  };

  const addItem = (data) => {
    fetch(url + "/todo/item", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "added Successfully",
          });
          getItemDataFromBackend();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div>
        <Formik initialValues={todoItems} onSubmit={addItem}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center">
                <div
                  className="card m-5 p-5"
                  style={{
                    width: "50rem",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <h2 className="text-center mb-5">Todo App</h2>
                  <input
                    className="form-control p-3"
                    type="text"
                    placeholder="Enter Title"
                    id="item"
                    value={values.item}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary mt-3 w-25 mx-auto"
                    type="submit"
                  >
                    Add Data
                  </button>
                  <hr />
                  {/* {displayData()} */}
                  {itemsArray.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="card">
                          <div className="container">
                            <div
                              style={{ alignItems: "center" }}
                              className=" row d-flex justify content-center mt-2 p-2"
                            >
                              <div className="col-8">
                                <p>{data.item}</p>
                              </div>
                              <div className="col-2">
                                <Button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    deleteItem(data._id);
                                  }}
                                  variant="contained"
                                  color="error"
                                >
                                  <i className="fa fa-trash-alt m-0"></i>
                                  &nbsp;
                                </Button>
                              </div>
                              <div className="col-2">
                                <Button
                                  className="btn btn-danger"
                                  // onClick={() => {
                                  //   deleteItem(data._id);
                                  // }}
                                  variant="contained"
                                  color="warning"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  onClick={(e) => showHandler(e, index)}
                                >
                                  <i className="fas fa-pen m-0"></i>
                                  &nbsp;
                                </Button>
                                {index == selected && show ? (
                                  <div
                                    className="modal fade"
                                    id="exampleModal"
                                    role="dialog"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className="modal-dialog"
                                      role="document"
                                    >
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5
                                            className="modal-title"
                                            id="exampleModalLabel"
                                          >
                                            Modal title
                                          </h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            <span aria-hidden="true">
                                              &times;
                                            </span>
                                          </button>
                                        </div>
                                        <div className="modal-body">
                                          <input
                                            onChange={(e) =>
                                              setUpdate(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div className="modal-footer">
                                          <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal"
                                          >
                                            Close
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() =>
                                              handleUpdate(data._id)
                                            }
                                          >
                                            Save changes
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : // <input />
                                null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default TodoList;
