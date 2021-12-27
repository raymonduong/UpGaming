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
      <h1 className="text-center text-4xl md:text-9xl mt-52 mb-8">
        Up and Gaming
      </h1>
      <h2 className="text-center text-4xl md:text-3xl mb-56">
        Have a look at up-and-coming games
      </h2>
      <div className="flex flex-col gap-5 mb-10 md:flex-row md:flex-wrap content-center justify-center ml-auto mr-auto w-2/3">
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/SIFU.png"}
            className="game-box game-box-bg rounded-md"
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
            className="game-box game-box-bg rounded-md"
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
            className="game-box game-box-bg rounded-md"
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
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Pokemon Legends Arceus Cover Art"
          ></img>
          <img
            src={"assets/Studios/Nintendo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "45px", top: "-18px", left: "0" }}
            alt="Nintendo Switch Logo"
          ></img>
          <img
            src={"assets/Logo/Arceus.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-90px" }}
            alt="Pokemon Legends Arceus Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/R6Extract.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Rainbow Six Extraction Cover Art"
          ></img>
          <img
            src={"assets/Studios/Ubisoft.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "100px", width: "100px", right: "25px" }}
            alt="Ubisoft Logo"
          ></img>
          <img
            src={"assets/Logo/R6Extract.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Rainbow Six Extraction Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/DL2.png"}
            className="game-box game-box-bg rounded-md"
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
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Gran Turismo 7 Cover Art"
          ></img>
          <img
            src={"assets/Logo/GT7.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Gran Turismo 7 Logo"
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
            src={"assets/Cover Art/Triangle.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Triangle Strategy Cover Art"
          ></img>
          <img
            src={"assets/Studios/Nintendo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "45px", top: "-18px", left: "0" }}
            alt="Nintendo Switch Logo"
          ></img>
          <img
            src={"assets/Logo/Triangle.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-50px" }}
            alt="Triangle Strategy Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/TTW.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Tiny Tina's Wonderland Cover Art"
          ></img>
          <img
            src={"assets/Logo/TTW.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Tiny Tina's Wonderland Logo"
          ></img>
          <img
            src={"assets/Studios/2K.svg"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "30px", bottom: "-20px" }}
            alt="2K Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/GOWR.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="God of War: Ragnorak Cover Art"
          ></img>
          <img
            src={"assets/Logo/GOWR.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="God of War: Ragnorak Logo"
            style={{ top: "-150px", left: "15px" }}
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
