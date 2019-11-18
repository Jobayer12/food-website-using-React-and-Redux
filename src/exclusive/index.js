import React, { Component } from "react";
import "./index.css";

class index extends Component {
  render() {
    return (
      <div className="container discount_product">
        <p className="display-6">EXCLUSIVE DEALS & DISCOUNTS</p>
        <div className="row mb-4 d-flex align-items-center justify-content-center">
          <div className="col-sm-6 col-md-6 col-lg-6 px-0">
            <img
              src="http://localhost:4000/discount/ia_200000003.jpg"
              alt="test"
              className="img-fluid"
            />
            
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 px-0">
            <img
              src="http://localhost:4000/discount/ia_200000004.jpg"
              className="img-fluid"
              alt="test"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default index;
