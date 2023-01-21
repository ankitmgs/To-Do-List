import React, { useState } from "react";
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import Swal from "sweetalert2";

// import axios from "axios";



const TodoList = ({ }) => {

  const [itemText, setItemText] = useState('');

  //add new todo item to database
  // const addItem = (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await axios.post('http://localhost:5000/todo/item', { item: itemText });
  //     console.log(res);
  //     setItemText('');
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }
  const addItem = (data) => {
    fetch('http://localhost:5000' + "/todo/item", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
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
  }
  return (
    <div className="container">
      <form className="form" obSubmit={addItem}>
        <div className="d-flex justify-content-center">
          <div
            className="card m-5 p-5"
            style={{
              width: "50rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <input
              className="form-control"
              type="text"
              placeholder="Enter Title"

              onChange={e => {
                setItemText(e.target.value)
              }}
              value={itemText}
            />
            <button className="btn btn-primary mt-3">Add</button>

            <hr />
            <div className="card">
              <div className="row">
                <div className="col-2">
                  {/* <div className="d-flex justify-content-center">
                    <input className="mt-3" type="checkbox" />
                  </div> */}
                </div>
                <div className="col-6">
                  <p className="mt-3 py-2" style={{ fontSize: "1.5rem" }}>

                  </p>
                </div>
                <div className="col-4 icons">
                  <BiEdit className="icon" >Delete</BiEdit>
                  <AiFillDelete className=" icon " >Edit</AiFillDelete>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoList;
