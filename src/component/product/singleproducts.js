import React, { Component } from "react";
import "../newProduct/newproduct.css";

class singleproducts extends Component {
  constructor() {
    super();
    this.state = {
      baseUrl: "http://localhost:4000/"
    };
  }
  render() {
    let { product } = this.props;
    return (
      <div className="col-md-4 col-sm-4 col-lg-3">
        <div className="card">
          <img
            key={product.uid}
            ref="imagesize"
            className="imagesize img-fluid"
            src={this.state.baseUrl + product.image}
            alt=""
          />
          <div className="card-body cardcontent text-justify text-center">
            <span className="nobackground productColor">{product.name}</span>
            <br />
            <p className="measurement-tag nobackground">{product.weight}</p>
            <br />
            <p className="price nobackground my-2">{product.price + "TK"}</p>
            <br />
            <button className="addtocart nobackground">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default singleproducts;
