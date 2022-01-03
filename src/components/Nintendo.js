import React, { Component } from "react";
import NintendoImg from "../platform/Nintendo.png";

class Nintendo extends Component {
  render() {
    return (
      <img src={NintendoImg} alt="Nintendo Logo" className="w-10 h-10 rounded m-1" title="Nintendo"></img>
    );
  }
}

export default Nintendo;
