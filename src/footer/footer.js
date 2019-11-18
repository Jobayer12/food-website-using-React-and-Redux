import React, { Component } from "react";
import { Link } from "react-router-dom";
import images from "../img/ia_200000007.png";
import facebook from "../img/ia_2600000017.png";
import twitter from "../img/ia_2600000018.png";
import googleplus from "../img/ia_2600000019.png";
import youtube from "../img/ia_2600000020.png";
import paymentgateway from "../img/ia_2600000021.png";

class footer extends Component {
  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div className="row m-0">
          <div className="col-md-2 col-lg-2 col-sm-6">
            <div className="container" style={{ lineHeight: 0.5 }}>
              <img className="img-fluid" src={images} alt="" />
              <small
                className="m-0 p-0 text-justify"
                style={{ fontSize: "10px" }}
              >
                E-commerce platform coupled with a chain of brick-and-mortar
                stores for safe food.
              </small>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 m-auto">
            <span>
              <Link to="/about">About</Link>
            </span>
            <br />

            <span>
              <Link to="/terms">Terms Of Use</Link>
            </span>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 m-auto">
            <span>
              <Link to="/faq">FAQ</Link>
            </span>

            <br />
            <span>
              <Link to="/privacy">Privacy Policy</Link>
            </span>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 m-auto">
            <span>
              <Link to="/contact">Contact Us</Link>
            </span>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 m-auto">
            <span className="text-center mx-2">Be connected</span>
            <br />
            <div className="mt-3" style={{ display: "inline", width: "20px" }}>
              <a
                href="https://www.facebook.com/khaasfood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid mx-2"
                  src={facebook}
                  alt=""
                  style={{ display: "inline-block", height: "20px" }}
                />
              </a>
              <a
                href="https://twitter.com/khaasfood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid mx-2"
                  src={twitter}
                  alt=""
                  style={{ display: "inline-block", height: "20px" }}
                />
              </a>
              <a
                href="https://plus.google.com/104993349465118182206"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid mx-2"
                  src={googleplus}
                  alt=""
                  style={{ display: "inline-block", height: "20px" }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC9PsTAh__tMKehLeBZ7dhkw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid mx-2"
                  src={youtube}
                  alt=""
                  style={{ display: "inline-block", height: "20px" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 m-auto">
            <img className="img-fluid" src={paymentgateway} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
