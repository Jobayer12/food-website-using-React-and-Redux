import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
class profile extends Component {
  render() {
    return (
      <div className="profilebody">
        <div className="terms-image">
          <p className="text-center">USER DASHBOARD</p>
          <br />
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-3 col-lg-3 col-sm-12">
              <Link to="/order">
                <button
                  className="btn btn-success px-5 my-1 mx-1"
                  style={{ height: "40px", width: "200px" }}
                >
                  My Order
                </button>
              </Link>
              <Link to="/profile">
                <button
                  className="btn btn-success px-5 my-1 mx-1"
                  style={{ height: "40px", width: "200px" }}
                >
                  Profile
                </button>
              </Link>
            </div>
            <div className="col-md-9 col-lg-9 col-sm-12">
              <span className="customer">Customer Information</span>
              <form className="mt-4">
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">First Name:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Last Name:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name:"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Phone Number:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number:"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">
                    Email Address ( Not verified ):
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email Address"
                      disabled
                    />
                  </div>
                </div>
              </form>

              <span className="customer">Billing Information</span>
              <form className="mt-4">
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Billing Name:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Billing Name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Phone Number:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Address:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Zip Code:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">City:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
              </form>
              <span className="customer">Shipping Information</span>
              <form className="mt-4">
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Shipping Name:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Shipping Name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Phone Number:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Address:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">Zip Code:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">City:</label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profile;
