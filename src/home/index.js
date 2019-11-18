import React, { Component } from "react";
import { connect } from "react-redux";
import { getFirstPage } from "../redux/actions/dataAction";
import "./home.css";
import Deal from "../exclusive";
import NewProduct from "../component/newProduct/newproduct";
import Popular from "../component/newProduct/popular";
import Ourpromises from "../component/newProduct/ourpromises";
import Categories from "../component/newProduct/categories";
import Axios from "axios";

class index extends Component {
  state = {
    allcategories: [],
    newProduct: [],
    popular: []
  };

  componentDidMount() {
    Axios.get("http://localhost:4000")
      .then(res => {
        let persons = res.data;
        this.setState({
          allcategories: persons.allcategories[0],
          newProduct: persons.newProduct[0],
          popular: persons.popular[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  onScroll = () => {
    //console.log(window.pageYOffset);
    console.log(window.scrollY);
  };

  render() {
    const { allcategories, popular, newProduct } = this.state;
    document.addEventListener("scroll", this.onScroll);
    return (
      <div>
        <img
          className="imagebar"
          src="http://localhost:4000/header.jpg"
          alt="header"
        />
        <Deal />
        <div className="backgroundColor">
          <p className="nobackgroundColor">New Product</p>
          <NewProduct
            key="961a30be-3a5d-4bc0-9068-ba1dbd111955"
            newProduct={newProduct}
          />
        </div>
        <p>Popular Product</p>
        <Popular key="78dcc17d-ecd6-4d56-874c-53350eac8e46" Popular={popular} />
        <Ourpromises />
        <Categories
          key="723210e5-e810-4773-865b-c7236493621c"
          Categories={allcategories}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getFirstPage }
)(index);
