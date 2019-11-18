import React, { Component } from "react";
import "./newproduct.css";

import arrowRight from "../../img/back.svg";
import arrowLeft from "../../img/next.svg";

class newproduct extends Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
      baseUrl: "http://localhost:4000/",
      arrowNext: arrowRight,
      arrowPrev: arrowLeft,
      ScreenSize: window.innerWidth,
      animation: ""
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    const lastIndex = this.props.newProduct.length - 2;

    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 2;

    this.setState({
      animation: null
    });

    this.setState({
      currentImageIndex: index,
      animation: "animated slideInLeft faster"
    });
  }
  nextSlide() {
    const lastIndex = this.props.newProduct.length - 2;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 2;
    this.setState({
      currentImageIndex: index,
      animation: "animated slideInRight faster"
    });
  }

  eventHandler = () => {
    this.setState({ ScreenSize: window.innerWidth });
  };

  render() {
    let firstFiveVideo;
    window.addEventListener("resize", this.eventHandler);
    if (this.state.ScreenSize >= 1200) {
      const index = this.state.currentImageIndex;
      firstFiveVideo = this.props.newProduct.slice(index, index + 6);
      if (firstFiveVideo.length < 6) {
        firstFiveVideo = firstFiveVideo.concat(
          this.props.newProduct.slice(0, 6 - firstFiveVideo.length)
        );
      }
    } else if (this.state.ScreenSize < 1200 && this.state.ScreenSize >= 768) {
      const index = this.state.currentImageIndex;
      firstFiveVideo = this.props.newProduct.slice(index, index + 4);
      if (firstFiveVideo.length < 4) {
        firstFiveVideo = firstFiveVideo.concat(
          this.props.newProduct.slice(0, 4 - firstFiveVideo.length)
        );
      }
    } else if (this.state.ScreenSize < 768) {
      const index = this.state.currentImageIndex;
      firstFiveVideo = this.props.newProduct.slice(index, index + 2);
      if (firstFiveVideo.length < 2) {
        firstFiveVideo = firstFiveVideo.concat(
          this.props.newProduct.slice(0, 2 - firstFiveVideo.length)
        );
      }
    }

    return (
      <div className="d-flex align-items-center justify-content-center mb-4 ProductList">
        <img
          ref="iconSize"
          className="iconSize mx-1"
          id="hello"
          src={this.state.arrowNext}
          alt="arrow next"
          onClick={this.prevSlide}
        />

        {firstFiveVideo.map((product, index) => (
          <div key={product.uid} className={this.state.animation}>
            <div className="card">
              <img
                key={product.uid}
                ref="imagesize"
                className="imagesize img-fluid"
                src={this.state.baseUrl + product.image}
                alt=""
              />
              <div className="card-body cardcontent text-justify text-center">
                <span className="nobackground productColor">
                  {product.name}
                </span>
                <br />
                <p className="measurement-tag nobackground">{product.weight}</p>
                <br />
                <p className="price nobackground">{product.price + "TK"}</p>
                <br />
                <button className="addtocart nobackground">Add to cart</button>
              </div>
            </div>
          </div>
        ))}

        <img
          className="iconSize mx-1"
          src={this.state.arrowPrev}
          onClick={this.nextSlide}
          alt="arrow prev"
        />
      </div>
    );
  }
}

export default newproduct;
