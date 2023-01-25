import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../config";

const EditItem = () => {
  const url = app_config.api_url;
  const [initialData, setInitialData] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const itemId = useParams();

  const getDataByid = () => {
    // console.log(itemId);
    fetch(url + "/todo/getbyid/" + itemId.id)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInitialData(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getDataByid();
  }, []);

  const updateSubmit = (data) => {
    // console.log("haa",data);
    fetch(url + "/todo/update/" + itemId.id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Update ho  gaya",
          });
        }
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      {isloading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="card">
          <Formik initialValues={initialData} onSubmit={updateSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input id="item" value={values.item} onChange={handleChange} />

                <button className="btn btn-success" type="submit">
                  Update
                </button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default EditItem;
