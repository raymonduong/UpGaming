import React, { Component } from "react";
import EPImg from "../platform/Pick.png";

class EditorsPick extends Component {
  render() {
    return (
      <img src={EPImg} alt="Editor is looking forward to this game" className="w-10 h-10 m-1 rounded" title="I'm looking out for this game"></img>
    );
  }
}

export default EditorsPick;