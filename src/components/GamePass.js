import React, { Component } from "react";
import GPImg from "../platform/GP.png";

class GamePass extends Component {
  render() {
    return (
      <img src={GPImg} alt="Game Pass Logo" className="w-10 h-10 rounded m-1" title="Game Pass"></img>
    );
  }
}

export default GamePass;
