import React, { Component } from "react";
import "./newproduct.css";
import { Link } from "react-router-dom";
class categories extends Component {
  constructor() {
    super();
    this.state = {
      baseUrl: "http://localhost:4000/"
    };
  }

  render() {
    const { Categories } = this.props;

    return (
      <div className="container">
        <p>PRODUCT CATEGORIES</p>

        <div className="">
          <div className="row">
            {Categories.map((product, index) => (
              <div
                key={product.uid}
                className="col m-4 d-flex align-items-center justify-content-center shadowEffect"
              >
                <Link
                  className="categories-item"
                  to={"/products/" + product.name}
                  target="_self"
                >
                  <img
                    key={product.uid}
                    ref="imagesize"
                    className="Category_imagesize pt-4"
                    src={this.state.baseUrl + product.image}
                    alt=""
                  />
                  <p>{product.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default categories;
