import logo from "./logo.svg";
import "./App.css";
import "atropos/css";
import Atropos from "atropos/react";
import { Helmet } from "react-helmet";
<link rel="stylesheet" href="path/to/atropos.css" />;

export default function App() {
  return (
    <div id="app" className="App">
      <Helmet>
        <title>Games of 2022</title>
      </Helmet>
      <p className="black">Ayy its a me mario</p>
      <div className="flex flex-col gap-4 md:flex-row">
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/SIFU.png"}
            className="game-box game-box-bg rounded-xl"
            data-atropos-offset="-4"
          ></img>
          <img
            src={"assets/Logo/SIFU.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/HFW.png"}
            className="game-box game-box-bg rounded-xl"
            data-atropos-offset="-4"
          ></img>
          <img
            src={"assets/Logo/HFW.png"}
            className="game-box-logo game-box"
            data-atropos-offset="2.5"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/ELDENRING.png"}
            className="game-box game-box-bg rounded-xl"
            data-atropos-offset="-4"
          ></img>
          <img
            src={"assets/Logo/ELDENRING.png"}
            className="game-box-logo game-box"
            data-atropos-offset="2.5"
            style={{ top: "-15vh" }}
          ></img>
        </Atropos>
      </div>
    </div>
  );
}
