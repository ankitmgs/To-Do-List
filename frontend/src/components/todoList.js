import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../config";

const TodoList = () => {
  const url = app_config.api_url;

  const [itemText, setItemText] = useState("");

  const [itemsArray, setItemsArray] = useState([]);

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
    return itemsArray.map((data) => (
      <>
        <div className="card">
          <div className="row">
            <div className="col-2">
              <div className="d-flex justify-content-center">
                <input className="mt-3" type="checkbox" />
              </div>
            </div>
            <div className="col-6">
              <p className="mt-3 py-2" style={{ fontSize: "1.5rem" }}>
                {data.item}
              </p>
            </div>
            <div className="col-4 icons">
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteItem(data._id);
                }}
              >
                Delete
              </button>
              <AiFillDelete className=" icon ">Edit</AiFillDelete>
            </div>
          </div>
        </div>
      </>
    ));
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
                  {displayData()}
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
