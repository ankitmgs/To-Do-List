import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
                <label>Email address</label>
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="email"
                  placeholder="Enter Email"
                />
                <label>Password</label>
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="password"
                  placeholder="Enter Password"
                />

                <button className="btn btn-primary mb-4 px-5" color="dark" size="lg">
                  Login
                </button>
                <a className="small text-muted" to="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <NavLink to="/signup" style={{ color: "#393f81" }}>
                    Register here
                  </NavLink>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <NavLink to="#!" className="small text-muted me-1">
                    Terms of use.
                  </NavLink>
                  <NavLink to="#!" className="small text-muted">
                    Privacy policy
                  </NavLink>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Login;
