import React, { Component } from "react";
import PCImg from "../platform/PC.png";

class PC extends Component {
  render() {
    return <img src={PCImg} alt="PC Logo" className="w-10 h-10 rounded m-1" title="PC"></img>;
  }
}

export default PC;
