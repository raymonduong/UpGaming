import "./App.css";
import "atropos/css";
import Atropos from "atropos/react";
import { Helmet } from "react-helmet";
<link rel="stylesheet" href="path/to/atropos.css" />;

export default function App() {
  return (
    <div id="app" className="App">
      <Helmet>
        <title>UpGaming</title>
      </Helmet>
      <h1 className="text-center text-5xl md:text-9xl mt-52 mb-8">UpGaming</h1>
      <h2 className="text-center text-4xl md:text-3xl mb-56">
        Have a look at these upcoming video games
      </h2>
      <div className="flex flex-col gap-5 mb-10 md:flex-row md:flex-wrap content-center justify-center ml-auto mr-auto w-3/4">
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
            style={{ top: "-150px" }}
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
            style={{ bottom: "140px", width: "100px", right: "35px" }}
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
            style={{ top: "100px" }}
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
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Forspoken.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Forspoken Cover Art"
          ></img>
          <img
            src={"assets/Logo/Forspoken.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Forspoken Logo"
          ></img>
          <img
            src={"assets/Studios/SQ.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "100px", bottom: "-15px", right: "0" }}
            alt="Square Enix Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Stalker2.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Stalker 2 Art"
          ></img>
          <img
            src={"assets/Logo/Stalker2.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Stalker 2 Logo"
          ></img>
          <img
            src={"assets/Studios/GameWorld.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "auto", bottom: "-20px", right: "10px" }}
            alt="Game World Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/Kirby.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Kirby and the Forgetten Land Cover Art"
          ></img>
          <img
            src={"assets/Studios/Nintendo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "45px", top: "-18px", left: "0" }}
            alt="Nintendo Switch Logo"
          ></img>
          <img
            src={"assets/Logo/Kirby.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-90px" }}
            alt="Kirby and the Forgetten Land Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Redfall.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Redfall Art"
          ></img>
          <img
            src={"assets/Logo/Redfall.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-165px", left: "15px" }}
            alt="Redfall Logo"
          ></img>
          <img
            src={"assets/Studios/Bethesda.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "80px", bottom: "-20px", right: "10px" }}
            alt="Bethesda Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/SR.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Saints Row Art"
          ></img>
          <img
            src={"assets/Studios/DeepSilver.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "40px", bottom: "-5px", right: "5px" }}
            alt="Deep Silver Logo"
          ></img>
          <img
            src={"assets/Logo/SR.svg"}
            className="game-box-logo game-box"
            data-atropos-offset="1"
            style={{ top: "-130px", left: "15px" }}
            alt="Saints Row Logo"
          ></img>
          <img
            src={"assets/Logo/MC.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ width: "100%", objectFit: "cover", left: "0" }}
            alt="Main Protagonist"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Starfield.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Starfield Art"
          ></img>
          <img
            src={"assets/Logo/Starfield.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "0", left: "15px" }}
            alt="Starfield Logo"
          ></img>
          <img
            src={"assets/Studios/Bethesda.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "80px", bottom: "-20px", right: "10px" }}
            alt="Bethesda Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Minecraft.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Minecraft Art"
            style={{ objectPosition: "left" }}
          ></img>
          <img
            src={"assets/Logo/Minecraft.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "0", left: "15px" }}
            alt="Redfall Logo"
          ></img>
          <img
            src={"assets/Studios/Mojang.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "50px", bottom: "-15px", right: "5px" }}
            alt="Mojang Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/LEGO.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="LEGO Star Wars: The Skywalker Saga Art"
          ></img>
          <img
            src={"assets/Logo/LEGO.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "125px", left: "15px" }}
            alt="LEGO Star Wars: The Skywalker Saga Logo"
          ></img>
          <img
            src={"assets/Studios/WB.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "40px", bottom: "-10px", right: "5px" }}
            alt="Warner Brothers Logo"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/Loz.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="The Sequel to the Legend of Zelda: Breath of the Wild Cover Art"
          ></img>
          <img
            src={"assets/Studios/Nintendo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "45px", top: "-18px", left: "0" }}
            alt="Nintendo Switch Logo"
          ></img>
          <img
            src={"assets/Logo/LoZ.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "0", left: "20px" }}
            alt="The Sequel to the Legend of Zelda: Breath of the Wild Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/GWT.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Ghostwire Tokyo Art"
          ></img>
          <img
            src={"assets/Logo/GWT.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "120px", left: "15px" }}
            alt="Ghostwire Tokyo Logo"
          ></img>
          <img
            src={"assets/Studios/Bethesda.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "80px", bottom: "-20px", right: "10px" }}
            alt="Bethesda Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Sonic.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Sonic Frontiers Tokyo Art"
          ></img>
          <img
            src={"assets/Logo/Sonic.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-120px", left: "15px" }}
            alt="Sonic Frontiers  Logo"
          ></img>
          <img
            src={"assets/Studios/Sega.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "80px", bottom: "-20px", right: "10px" }}
            alt="Sega Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Stray.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Stray Art"
          ></img>
          <img
            src={"assets/Logo/Stray.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "90px", left: "15px" }}
            alt="Stray Logo"
          ></img>
          <img
            src={"assets/Studios/Annapurna.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "50px", bottom: "-10px", right: "5px" }}
            alt="Annapurna Interactive Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/SS.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Blank White Background"
          ></img>
          <img
            src={"assets/Studios/WB.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "40px", bottom: "-5px", right: "5px" }}
            alt="Warner Bros Logo"
          ></img>
          <img
            src={"assets/Logo/SSLogo.png"}
            className="game-box-logo game-box"
            data-atropos-offset="1"
            style={{ top: "0", left: "15px" }}
            alt="Suicide Squad: Kill the Justice League Logo"
          ></img>
          <img
            src={"assets/Logo/SS.png"}
            className="game-box-logo game-box"
            data-atropos-offset="3"
            style={{ width: "100%", objectFit: "cover", left: "0" }}
            alt="Suicide Squad: Kill the Justice League Cast"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/Splatoon3.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Splatoon 3 Cover Art"
            style={{objectPosition:"left"}}
          ></img>
          <img
            src={"assets/Studios/Nintendo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "45px", top: "-18px", left: "0" }}
            alt="Nintendo Switch Logo"
          ></img>
          <img
            src={"assets/Logo/Splatoon3.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "0", left: "20px" }}
            alt="Splatoon 3 Logo"
          ></img>
        </Atropos>
      </div>
    </div>
  );
}
