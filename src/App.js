import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topheader from "./header/topHeader";
import Footer from "./footer/footer";
import Home from "./home/index";
import Allproduct from "./component/product/allproduct";
import Login from "./component/register/login";
import Register from "./component/register/register";
import Terms from "./component/terms/terms";
import Privacy from "./component/terms/pravicypolicy";
import Faq from "./component/terms/faq";
import Profile from "./component/profile/profile";
import Order from "./component/order/order";

class App extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Topheader />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Allproduct} />
              <Route exact path="/products/:category" component={Allproduct} />
              <Route
                exact
                path="/products/:category/:subcategory"
                component={Allproduct}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/terms" component={Terms} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/order" component={Order} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
