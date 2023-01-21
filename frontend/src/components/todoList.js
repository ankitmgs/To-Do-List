import React, { useState } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"


const baseUrl = "http://localhost/5000";

const TodoList = ({ }) => {

  const [text, setText] = useState("");

  // const [itemText, setItemText] = useState('');

  //add new todo item to database
  // const addItem = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await axios.post('http://localhost:5000/api/item', { item: itemText });
  //     console.log(res);
  //     setItemText('');
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }

  const getAllToDo = (setToDo) => {
    axios
      .get(baseUrl)
      .then(({ data }) => {
        console.log('data ---> ', data);
        setToDo(data)
      })
  }

  const addToDo = (text, setText, setTodo) => {
    axios
      .post(`${baseUrl}/save`, { text })
      .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setTodo)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="container">
      <form className="form" >
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            // onChange={e => {
            //   setItemText(e.target.value)
            // }}
            // value={itemText}  
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
                    {text}
                  </p>
                </div>
                <div className="col-4 icons">
                  <BiEdit className="icon" onClick={updateModel}>Delete</BiEdit>
                  <AiFillDelete className=" icon " onClick={deleteToDo}>Edit</AiFillDelete>
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
