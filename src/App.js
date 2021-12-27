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
        <title>Up and Gaming</title>
      </Helmet>
      <h1 className="text-center text-4xl m-6">Up and Gaming</h1>
      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap content-center justify-center ml-auto mr-auto w-2/3">
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/SIFU.png"}
            className="game-box game-box-bg"
            data-atropos-offset="-4"
            alt="Sifu Cover Art"
          ></img>
          <img
            src={"assets/Logo/SIFU.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Sifu Logo"
          ></img>
          <img
            src={"assets/Studios/Sloclap.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "100px", bottom: "-15px", right: "0" }}
            alt="Sloclap Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/HFW.png"}
            className="game-box game-box-bg"
            data-atropos-offset="-4"
            alt="Horizon Forbidden West Cover Art"
          ></img>
          <img
            src={"assets/Logo/HFW.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Horizon Forbidden West Logo"
          ></img>
          <img
            src={"assets/Studios/ps.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "30px", bottom: "-15px" }}
            alt="PlayStation Studios Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/ELDENRING.png"}
            className="game-box game-box-bg"
            data-atropos-offset="-4"
            alt="Elden Ring Cover Art"
          ></img>
          <img
            src={"assets/Logo/ELDENRING.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-130px" }}
            alt="Elden Ring Logo"
          ></img>
          <img
            src={"assets/Studios/BandaiNamco.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "auto", bottom: "-20px" }}
            alt="Bandai Namco Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/Arceus.png"}
            className="game-box game-box-bg"
            data-atropos-offset="-4"
            alt="Pokemon Legends Arceus Cover Art"
          ></img>
          <img
            src={"assets/Logo/Arceus.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-90px" }}
            alt="Pokemon Legends Arceus Logo"
          ></img>
          <img
            src={"assets/Studios/PkmnCo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "100px", bottom: "-25px" }}
            alt="Pokemon Company Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/R6Extract.png"}
            className="game-box game-box-bg"
            data-atropos-offset="-4"
            alt="Rainbow Six Extraction Cover Art"
          ></img>
          <img
            src={"assets/Logo/R6Extract.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Rainbow Six Extraction Logo"
          ></img>
          <img
            src={"assets/Studios/Ubisoft.png"}
            className="game-box-studio game-box"
            data-atropos-offset="5"
            style={{ bottom: "100px", width: "100px", right: "25px" }}
            alt="Ubisoft Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/DL2.png"}
            className="game-box game-box-bg"
            data-atropos-offset="-4"
            alt="Dying Light 2 Cover Art"
          ></img>
          <img
            src={"assets/Logo/DL2.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "80px" }}
            alt="Dying Light 2 Logo"
          ></img>
          <img
            src={"assets/Studios/Techland.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "90px", bottom: "-20px" }}
            alt="Techland Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/GT7.png"}
            className="game-box game-box-bg"
            data-atropos-offset="-4"
            alt="Horizon Forbidden West Cover Art"
          ></img>
          <img
            src={"assets/Logo/GT7.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Horizon Forbidden West Logo"
          ></img>
          <img
            src={"assets/Studios/ps.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "30px", bottom: "-15px" }}
            alt="PlayStation Studios Logo"
          ></img>
        </Atropos>
      </div>
    </div>
  );
}
