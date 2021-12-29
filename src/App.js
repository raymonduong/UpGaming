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
            title="I know gōngfu"
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
            title="I wonder what Lance Reddick is up to now"
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
            title="OOOOOOOOOOOOOOOHHHHHHHHHHHHHHHHHHHHH"
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
            title="I would die for Hisuian Voltorb"
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
            title="Who's the real monster here? Caveira players or the alien?"
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
            title="Zombies are a great motivator to learn parkour"
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
            title="Vrrrrooooooooommm responsibly."
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
            style={{ top: "-50px", left: "15px" }}
            alt="Triangle Strategy Logo"
            title="It wasn't very hard to make this card"
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
            title="Who's ready to riggedy roleplay? Spoilers: It's you baby"
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
            style={{ top: "-180px", left: "15px" }}
            title="Kratos and Atreus experiences what it feels like to be in Canada"
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
            style={{ left: "15px", top:"-210px"}}
            title="Her bracelet can talk! It's also from Sussex!"
          ></img>
          <img
            src={"assets/Studios/SQBlack.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "100px", bottom: "-30px", right: "5px" }}
            alt="Square Enix Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Stalker2.png"}
            className="game-box game-box-bg rounded-md brightness-50"
            data-atropos-offset="-4"
            alt="Stalker 2 Art"
          ></img>
          <img
            src={"assets/Logo/Stalker2.png"}
            className="game-box-logo game-box drop-shadow-2xl"
            data-atropos-offset="5"
            alt="Stalker 2 Logo"
            title="Good Hunting, STALKER"
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
            title="It's canon that Kirby has killed a god"
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
            title="Of course Massachusetts gets infested with vampires."
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
            title="All I need to know is if I can change certain...attributes of my characters"
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
            title="But can we climb ladders?"
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
            alt="Minecraft The Wild Update Art"
            style={{ objectPosition: "left" }}
          ></img>
          <img
            src={"assets/Logo/Minecraft.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "0", left: "15px" }}
            alt="Minecraft The Wild Update Logo"
            title="Mud blocks and mangroves! Frogs and tadpoles! Chests in boats! The deep dark! The warden! The warden? The warden!!! Eeeek"
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
            title="I want to become a Lego figure like my father."
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
            title="Yahaha! You found me!"
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
            title="It's spoooky."
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
            alt="Sonic Frontiers Logo"
            title="Uhh...Meow?"
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
            title="Uhh...Meow?"
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
            data-atropos-offset="5"
            style={{ width: "100%", objectFit: "cover", left: "0" }}
            alt="Suicide Squad: Kill the Justice League Cast"
            title="Bird."
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/Splatoon3.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Splatoon 3 Cover Art"
            style={{ objectPosition: "left" }}
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
            title="You're a kid. You're a squid. You're a kid. You're a squid. You're a kid. You're a squid. You're a kid. You're a squid. You're a kid. You're a squid."
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Hogwarts.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Hogwarts Legacy Art"
          ></img>
          <img
            src={"assets/Logo/Hogwarts.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "0" }}
            alt="Hogwarts Legacy Logo"
            title="Hogwarts didn't always have bathrooms. Before adopting Muggle plumbing methods in the eighteenth century, witches and wizards simply relieved themselves wherever they stood, and vanished the evidence."
          ></img>
          <img
            src={"assets/Studios/WB.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "40px", bottom: "-10px", right: "5px" }}
            alt="Warner Brothers Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Warhammer.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Total War: Warhammer 3 Art"
          ></img>
          <img
            src={"assets/Logo/Warhammer.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "150px" }}
            alt="Total War: Warhammer 3 Logo"
            title="Get ready for your computer to get toasty"
          ></img>
          <img
            src={"assets/Studios/CreativeAssembly.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "40px", bottom: "-10px", right: "5px" }}
            alt="Creative Assembly Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/FFOrigin.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Stranger of Paradise: Final Fantasy Origin Cover Art"
          ></img>
          <img
            src={"assets/Logo/FFOrigin.png"}
            className="game-box-logo game-box drop-shadow-2xl"
            data-atropos-offset="5"
            alt="Stranger of Paradise: Final Fantasy Origin Logo"
            style={{ top: "-60px" }}
            title="*Limp Bizkit plays*"
          ></img>
          <img
            src={"assets/Studios/SQBlack.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "100px", bottom: "-20px", right: "10px" }}
            alt="Square Enix Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/GK.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Gotham Knights Art"
          ></img>
          <img
            src={"assets/Logo/GK.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ left: "15px" }}
            alt="Gotham Knights Logo"
            title="Batman may cause internal bleeding and life-lasting injuries, but he doesn't kill"
          ></img>
          <img
            src={"assets/Studios/WB.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "40px", bottom: "-10px", right: "5px" }}
            alt="Warner Brothers Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/MMS.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Marvel's Midnight Suns Art"
          ></img>
          <img
            src={"assets/Logo/MMS.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ left: "22px" }}
            alt="Marvel's Midnight Suns Logo"
            title="Exit light! Enter nighttt!"
          ></img>
          <img
            src={"assets/Studios/2K.svg"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "40px", bottom: "-10px", right: "5px" }}
            alt="2K Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/PTR.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="A Plague Tale: Requiem Art"
          ></img>
          <img
            src={"assets/Studios/FocusEntertainment.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "35px", bottom: "-10px", right: "5px" }}
            alt="Focus Entertainment Logo"
          ></img>
          <img
            src={"assets/Logo/PTR.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ left: "22px", top: "170px" }}
            alt="A Plague Tale: Requiem Logo"
            title="I don't know how my computer rendered all those rats without exploding"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Gollum.png"}
            className="game-box game-box-bg rounded-md brightness-110"
            data-atropos-offset="-4"
            alt="The Lord of the Rings: Gollum Art"
          ></img>
          <img
            src={"assets/Studios/Daedalic.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "-10px", left: "150px", width: "150px" }}
            alt="Daedalic Entertainment Logo"
          ></img>
          <img
            src={"assets/Logo/Gollum.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="The Lord of the Rings: Gollum Logo"
            style={{
              top: "-150px",
              filter: "drop-shadow(5px 5px 5px #000000)",
            }}
            title="My preciousssssss"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/Avatar.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Avatar: Frontiers of Pandora Art"
            style={{ objectPosition: "left" }}
          ></img>
          <img
            src={"assets/Studios/UbisoftLogo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "-10px", right: "10px", width: "40px" }}
            alt="Daedalic Entertainment Logo"
          ></img>
          <img
            src={"assets/Logo/Avatar.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Avatar: Frontiers of Pandora Logo"
            style={{ top: "-110px" }}
            title="I wonder if this is based off a movie"
          ></img>
        </Atropos>
        <Atropos>
          <img
            src={"assets/Cover Art/M+R.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Mario + Rabbids Sparks of Hope Cover Art"
          ></img>
          <img
            src={"assets/Studios/Nintendo.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "45px", top: "-18px", left: "0" }}
            alt="Nintendo Switch Logo"
          ></img>
          <img
            src={"assets/Studios/UbisoftBlack.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ width: "45px", bottom: "-15px", right: "5px" }}
            alt="Ubisoft Logo"
          ></img>
          <img
            src={"assets/Logo/M+R.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            style={{ top: "-160px" }}
            alt="Mario + Rabbids Sparks of Hope Logo"
            title="It's a me, Chris Pratt"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/TCP.png"}
            className="game-box game-box-bg rounded-md brightness-75"
            data-atropos-offset="-4"
            alt="The Callisto Protocol Art"
            style={{ objectPosition: "left" }}
          ></img>
          <img
            src={"assets/Studios/Krafton.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "-20px", right: "10px", width: "90px" }}
            alt="Daedalic Entertainment Logo"
          ></img>
          <img
            src={"assets/Logo/TCP.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="The Callisto Protocol Logo"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/LDI.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Little Devil Inside Art"
          ></img>
          <img
            src={"assets/Studios/Neostream.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "-10px", right: "-10px", width: "80px" }}
            alt="Neostream Logo"
          ></img>
          <img
            src={"assets/Logo/LDI.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Little Devil Inside Logo"
            title="Korean Indie Game!"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/KSP2.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Kerbal Space Program 2 Art"
          ></img>
          <img
            src={"assets/Studios/Squad.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "-15px", right: "5px", width: "40px" }}
            alt="Squad Logo"
          ></img>
          <img
            src={"assets/Logo/KSP2.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Kerbal Space Program 2 Logo"
            style={{ top: "50px", left: "20px" }}
            title="This is probably the closest you'll get to working at NASA"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/BRC.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            alt="Bomb Rush Cyberfunk Art"
          ></img>
          <img
            src={"assets/Studios/TeamReptile.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "0px", right: "-40px", width: "150px" }}
            alt="Team Reptile Logo"
          ></img>
          <img
            src={"assets/Logo/BRC.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Bomb Rush Cyberfunk Logo"
            style={{ width: "auto", left: "0" }}
            title="Not to be confused with Jet Set Radio"
          ></img>
        </Atropos>
        <Atropos className="atropos">
          <img
            src={"assets/Cover Art/KOFXV.png"}
            className="game-box game-box-bg rounded-md"
            data-atropos-offset="-4"
            style={{ objectPosition: "" }}
            alt="Bomb Rush Cyberfunk Art"
          ></img>
          <img
            src={"assets/Studios/SNK.png"}
            className="game-box-studio game-box"
            data-atropos-offset="3"
            style={{ bottom: "-15px", right: "5px", width: "100px" }}
            alt="Team Reptile Logo"
          ></img>
          <img
            src={"assets/Logo/KOFXV.png"}
            className="game-box-logo game-box"
            data-atropos-offset="5"
            alt="Bomb Rush Cyberfunk Logo"
            style={{ width: "auto", left: "0" }}
            title="Are you okay? Buster Wolf!"
          ></img>
        </Atropos>
        <div>
          <h1 className="text-center text-3xl md:text-6xl mt-20">
            Where's my favorite game?
          </h1>
          <p className="text-center text-lg mr-auto ml-auto w-4/6 mt-5">
            Unfortunately, these things take time! If you haven't already
            guessed, there's loads upon loads of games coming out in 2022.
            Please be patient, I may get around to it sooner or later.
          </p>
        </div>
      </div>
    </div>
  );
}
