import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./all.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import { getAllProduct } from "../../redux/actions/dataAction";
import SingleProduct from "./singleproducts";

class allproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pcategory: "",
      Psubcategory: "",
      url: ""
    };
  }

  componentDidMount() {
    this.setState({
      url: this.props.match.url
    });

    this.OnChangeProduct(this.props.match.url);
  }

  OnChangeProduct = parameter => {
    this.props.getAllProduct(parameter);
  };

  onChangeHander = (event, parameter) => {
    this.OnChangeProduct(parameter);
  };
  render() {
    let { products, loading } = this.props.data;

    return (
      <div className="googlefonts">
        <div className="productImage">
          <div className="row d-flex align-item-center justify-content-center noTransparent">
            <div className="col-md-6">
              <p className="display-4 m-0">Products</p>
              <div className="input-group noTransparent">
                <input
                  type="text"
                  className="form-control noTransparent"
                  name="query"
                  id="query"
                  placeholder="Search Product(e.g. honey)"
                  data-provide="typeahead"
                  autoComplete="off"
                />
                <div className="input-group-append">
                  <button type="submit" className="noTransparent">
                    <i className="fa fa-search px-3 noTransparent"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-12 col-lg-3">
            <div className="mt-5 mx-2">
              <span>PRODUCT CATEGORIES</span>
              <div className="align-item-center justify-content-center">
                <ul className="mx-3 navbar-nav">
                  <li
                    onClick={e => {
                      this.onChangeHander(e, "/products/honey");
                    }}
                  >
                    <Link to="/products/honey">Honey</Link>
                  </li>
                  <li
                  // onClick={e => {
                  //   this.onChangeHander(e, "/products/grocery");
                  // }}
                  >
                    <a
                      href="/products/grocery"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Grocery
                    </a>
                    <ul
                      className="navbar-nav ml-3 collapse show"
                      id="collapseOne"
                    >
                      <li
                        onClick={e => {
                          this.onChangeHander(e, "/products/grocery/cocking");
                        }}
                      >
                        <Link to="/products/grocery/cocking">Cocking</Link>
                      </li>
                      <li
                        onClick={e => {
                          this.onChangeHander(e, "/products/grocery/pickles");
                        }}
                      >
                        <Link to="/products/grocery/pickles">Pickles</Link>
                      </li>
                      <li
                        onClick={e => {
                          this.onChangeHander(
                            e,
                            "/products/grocery/miscellaneous"
                          );
                        }}
                      >
                        <Link to="/products/grocery/miscellaneous">
                          Miscellaneous
                        </Link>
                      </li>
                      <li
                        onClick={e => {
                          this.onChangeHander(e, "/products/grocery/tea");
                        }}
                      >
                        <Link to="/products/grocery/tea">Tea</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                  // onClick={e => {
                  //   this.onChangeHander(e, "/products/dry-fish");
                  // }}
                  >
                    <a
                      href="/products/dry-fish"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Dry Fish
                    </a>
                    <ul
                      className="navbar-nav ml-3 collapse show"
                      id="collapseTwo"
                    >
                      <li
                        onClick={e => {
                          this.onChangeHander(e, "/products/dry-fish/organic");
                        }}
                      >
                        <Link to="/products/dry-fish/organic">Organic</Link>
                      </li>
                      <li
                        onClick={e => {
                          this.onChangeHander(
                            e,
                            "/products/dry-fish/non-organic"
                          );
                        }}
                      >
                        <Link to="/products/dry-fish/non-organic">
                          Non Organic
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    onClick={e => {
                      this.onChangeHander(e, "/products/fruits");
                    }}
                  >
                    <Link to="/products/fruits">Fruits</Link>
                  </li>
                  <li
                    onClick={e => {
                      this.onChangeHander(e, "/products/food-for-health");
                    }}
                  >
                    <Link to="/products/food-for-health">Food For Health</Link>
                  </li>
                  <li
                    className="mb-4"
                    onClick={e => {
                      this.onChangeHander(e, "/products/meat");
                    }}
                  >
                    <Link to="/products/meat">Meat</Link>
                  </li>
                  {/* <li>
                    <Link to="/products/package-offer">Package Offer</Link>
                  </li>
                  <li>
                    <Link to="/products/necessary-item">Necessary item</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-sm-12 col-lg-9 ">
            <div className="row">
              {!loading ? (
                products.map((product, index) => (
                  <SingleProduct key="showallsingleproduct" product={product} />
                ))
              ) : (
                <div className="offset-md-3 mt-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-dark" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getAllProduct }
)(allproduct);
