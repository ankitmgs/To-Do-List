import React, { useState } from "react";

const todoList = () => {

 const [itemText , setItemText] = useState('');

 
//add new todo item to database
  const addItem = async() =>{

    try {
      
    } catch (err) {
      console.log(err);
      
    }

  }
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
            onChange={e=>{
              setItemText(e.target.value)
              
            }}
            value ={itemText}
          />
          <button type="button" className="btn  mt-3 w-25 mx-auto" style={{ backgroundColor: "#5E00B8", color: "white" }}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default todoList;
