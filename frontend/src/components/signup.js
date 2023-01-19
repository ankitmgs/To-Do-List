import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Signup = () => {
  return (
    <div>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <label>Email</label>
            <MDBInput
              wrapperClass="mb-4"
              id="form1"
              type="email"
              placeholder="Enter Email"
            />
            <label>Name</label>
            <MDBInput
              wrapperClass="mb-4"
              id="form2"
              type="text"
              placeholder="Enter Name"
            />
            <label>Password</label>
            <MDBInput
              wrapperClass="mb-4"
              id="form3"
              type="password"
              placeholder="Enter Password"
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <button
              className="btn btn-primary mb-4 w-100 gradient-custom-4"
              size="lg"
            >
              Register
            </button>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Signup;
