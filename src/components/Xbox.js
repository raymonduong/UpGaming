import React, { Component } from "react";
import XboxImg from "../platform/Xbox.png";

class Xbox extends Component {
  render() {
    return <img src={XboxImg} alt="Xbox Logo" className="w-10 h-10 rounded m-1" title="Xbox"></img>;
  }
}

export default Xbox;
