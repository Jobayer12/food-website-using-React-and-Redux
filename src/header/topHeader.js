import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./top.css";
import images from "../img/ia_200000007.png";
import { userlogout } from "../redux/actions/userAction";

class topheader extends Component {
  userLogout = event => {
    this.props.userlogout();
  };

  render() {
    let { Auth } = this.props.user;
    let login = (
      <li className="nav-item px-3 mt-2">
        <Link to="/login">
          <i className="fa fa-user fa-lg"></i>
        </Link>
      </li>
    );
    if (Auth !== null) {
      login = (
        <li className="nav-item px-3 mt-1 dropdown">
          <button
            data-toggle="dropdown"
            className="CricleButton nav-link dropdown-toggle text-white d-flex justify-content-center align-item-center"
            id="navbarDropdown"
          >
            {Auth.email.slice(0, 2)}
          </button>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to="/profile">
              My Profile
            </Link>
            <Link class="dropdown-item" to="/order">
              My Order
            </Link>

            <button class="dropdown-item" onClick={this.userLogout}>
              Logout
            </button>
          </div>
        </li>
      );
    }
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={images} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mt-2 pl-3">
              <li className="nav-item pl-3">
                <form className="form-inline">
                  <input
                    className="form-control rounded-0"
                    type="search"
                    placeholder="Search Product"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success rounded-0"
                    type="submit"
                    style={{ backgroundColor: "#006e32" }}
                  >
                    <i
                      className="fa fa-search d-flex justify-content-center align-item-center bg-transparent"
                      style={{ color: "white" }}
                    ></i>
                  </button>
                </form>
              </li>
              <li className="nav-item pl-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item pl-3">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item pl-3">
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </li>

              <li className="nav-item pl-3">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item px-4 mt-2">
                <i className="fa fa-shopping-cart fa-lg"></i>
              </li>
              {login}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { userlogout }
)(topheader);
