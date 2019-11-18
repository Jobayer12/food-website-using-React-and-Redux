import React, { Component } from "react";
import Navbar from "./navbar";
import TopHeader from "./topHeader";
class header extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TopHeader />
      </div>
    );
  }
}

export default header;
