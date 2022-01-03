import React, { Component } from "react";
import PSImg from "../platform/PlayStation.png";

class PlayStation extends Component {
  render() {
    return <img src={PSImg} alt="PlayStation Logo" className="w-10 h-10 rounded m-1" title="PlayStation"></img>;
  }
}

export default PlayStation;
