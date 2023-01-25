import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../config";
import { NavLink } from "react-router-dom";

const TodoList = () => {
  const url = app_config.api_url;

  const [itemsArray, setItemsArray] = useState([]);

  //   const handleUpdate = (id) => {

  //     console.log("jcnsvji",update)
  //   console.log("sdjkbfshk",id)

  //   const requestOptions = {
  //     method: 'PUT',
  //     body: JSON.stringify({ "update":`${update}`}),
  //     headers: { 'Content-Type': 'application/json' },
  // };
  // fetch(url + "/todo/update/" + id,requestOptions).then((res)=>{console.log(res)
  //  return res.json()})
  //   };

  // const showHandler = (e, index) => {
  //   e.preventDefault();
  //   if (index !== selected) {
  //     setShow((show) => !show);
  //     setSelected(index);
  //   }

  //   console.log(index);
  // };

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
                                <NavLink to={"/todolist/edit/" + data._id}>
                                  <Button
                                    className="btn btn-danger"
                                    variant="contained"
                                    color="warning"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                  >
                                    <i className="fas fa-pen m-0"></i>
                                    &nbsp;
                                  </Button>
                                </NavLink>
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
