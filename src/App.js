import "./App.css";
import "atropos/css";
import React, { Component } from "react";
import Atropos from "atropos/react";
import { Helmet } from "react-helmet";
import ReactModal from "react-modal";
import YoutubeEmbed from "./components/YoutubeEmbed";
<link rel="stylesheet" href="path/to/atropos.css" />;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
      showModal9: false,
      showModal10: false,
      showModal11: false,
      showModal12: false,
      showModal13: false,
      showModal14: false,
      showModal15: false,
      showModal16: false,
      showModal17: false,
      showModal18: false,
      showModal19: false,
      showModal20: false,
      showModal21: false,
      showModal22: false,
      showModal23: false,
      showModal24: false,
      showModal25: false,
      showModal26: false,
      showModal27: false,
      showModal28: false,
      showModal29: false,
      showModal30: false,
      showModal31: false,
      showModal32: false,
      showModal33: false,
      showModal34: false,
      showModal35: false,
      showModal36: false,
      showModal37: false,
      showModal38: false,
      showModal39: false,
      showModal40: false,
      showModal41: false,
      showModal42: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleOpenModal6 = this.handleOpenModal6.bind(this);
    this.handleOpenModal7 = this.handleOpenModal7.bind(this);
    this.handleOpenModal8 = this.handleOpenModal8.bind(this);
    this.handleOpenModal9 = this.handleOpenModal9.bind(this);
    this.handleOpenModal10 = this.handleOpenModal10.bind(this);
    this.handleOpenModal11 = this.handleOpenModal11.bind(this);
    this.handleOpenModal12 = this.handleOpenModal12.bind(this);
    this.handleOpenModal13 = this.handleOpenModal13.bind(this);
    this.handleOpenModal14 = this.handleOpenModal14.bind(this);
    this.handleOpenModal15 = this.handleOpenModal15.bind(this);
    this.handleOpenModal16 = this.handleOpenModal16.bind(this);
    this.handleOpenModal17 = this.handleOpenModal17.bind(this);
    this.handleOpenModal18 = this.handleOpenModal18.bind(this);
    this.handleOpenModal19 = this.handleOpenModal19.bind(this);
    this.handleOpenModal20 = this.handleOpenModal20.bind(this);
    this.handleOpenModal21 = this.handleOpenModal21.bind(this);
    this.handleOpenModal22 = this.handleOpenModal22.bind(this);
    this.handleOpenModal23 = this.handleOpenModal23.bind(this);
    this.handleOpenModal24 = this.handleOpenModal24.bind(this);
    this.handleOpenModal25 = this.handleOpenModal25.bind(this);
    this.handleOpenModal26 = this.handleOpenModal26.bind(this);
    this.handleOpenModal27 = this.handleOpenModal27.bind(this);
    this.handleOpenModal28 = this.handleOpenModal28.bind(this);
    this.handleOpenModal29 = this.handleOpenModal29.bind(this);
    this.handleOpenModal30 = this.handleOpenModal30.bind(this);
    this.handleOpenModal31 = this.handleOpenModal31.bind(this);
    this.handleOpenModal32 = this.handleOpenModal32.bind(this);
    this.handleOpenModal33 = this.handleOpenModal33.bind(this);
    this.handleOpenModal34 = this.handleOpenModal34.bind(this);
    this.handleOpenModal35 = this.handleOpenModal35.bind(this);
    this.handleOpenModal36 = this.handleOpenModal36.bind(this);
    this.handleOpenModal37 = this.handleOpenModal37.bind(this);
    this.handleOpenModal38 = this.handleOpenModal38.bind(this);
    this.handleOpenModal39 = this.handleOpenModal39.bind(this);
    this.handleOpenModal40 = this.handleOpenModal40.bind(this);
    this.handleOpenModal41 = this.handleOpenModal41.bind(this);
    this.handleOpenModal42 = this.handleOpenModal42.bind(this);

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);
    this.handleCloseModal6 = this.handleCloseModal6.bind(this);
    this.handleCloseModal7 = this.handleCloseModal7.bind(this);
    this.handleCloseModal8 = this.handleCloseModal8.bind(this);
    this.handleCloseModal9 = this.handleCloseModal9.bind(this);
    this.handleCloseModal10 = this.handleCloseModal10.bind(this);
    this.handleCloseModal11 = this.handleCloseModal11.bind(this);
    this.handleCloseModal12 = this.handleCloseModal12.bind(this);
    this.handleCloseModal13 = this.handleCloseModal13.bind(this);
    this.handleCloseModal14 = this.handleCloseModal14.bind(this);
    this.handleCloseModal15 = this.handleCloseModal15.bind(this);
    this.handleCloseModal16 = this.handleCloseModal16.bind(this);
    this.handleCloseModal17 = this.handleCloseModal17.bind(this);
    this.handleCloseModal18 = this.handleCloseModal18.bind(this);
    this.handleCloseModal19 = this.handleCloseModal19.bind(this);
    this.handleCloseModal20 = this.handleCloseModal20.bind(this);
    this.handleCloseModal21 = this.handleCloseModal21.bind(this);
    this.handleCloseModal22 = this.handleCloseModal22.bind(this);
    this.handleCloseModal23 = this.handleCloseModal23.bind(this);
    this.handleCloseModal24 = this.handleCloseModal24.bind(this);
    this.handleCloseModal25 = this.handleCloseModal25.bind(this);
    this.handleCloseModal26 = this.handleCloseModal26.bind(this);
    this.handleCloseModal27 = this.handleCloseModal27.bind(this);
    this.handleCloseModal28 = this.handleCloseModal28.bind(this);
    this.handleCloseModal29 = this.handleCloseModal29.bind(this);
    this.handleCloseModal30 = this.handleCloseModal30.bind(this);
    this.handleCloseModal31 = this.handleCloseModal31.bind(this);
    this.handleCloseModal32 = this.handleCloseModal32.bind(this);
    this.handleCloseModal33 = this.handleCloseModal33.bind(this);
    this.handleCloseModal34 = this.handleCloseModal34.bind(this);
    this.handleCloseModal35 = this.handleCloseModal35.bind(this);
    this.handleCloseModal36 = this.handleCloseModal36.bind(this);
    this.handleCloseModal37 = this.handleCloseModal37.bind(this);
    this.handleCloseModal38 = this.handleCloseModal38.bind(this);
    this.handleCloseModal39 = this.handleCloseModal39.bind(this);
    this.handleCloseModal40 = this.handleCloseModal40.bind(this);
    this.handleCloseModal41 = this.handleCloseModal41.bind(this);
    this.handleCloseModal42 = this.handleCloseModal42.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleOpenModal2() {
    this.setState({ showModal2: true });
  }
  handleOpenModal3() {
    this.setState({ showModal3: true });
  }
  handleOpenModal4() {
    this.setState({ showModal4: true });
  }
  handleOpenModal5() {
    this.setState({ showModal5: true });
  }
  handleOpenModal6() {
    this.setState({ showModal6: true });
  }
  handleOpenModal7() {
    this.setState({ showModal7: true });
  }
  handleOpenModal8() {
    this.setState({ showModal8: true });
  }
  handleOpenModal9() {
    this.setState({ showModal9: true });
  }
  handleOpenModal10() {
    this.setState({ showModal10: true });
  }
  handleOpenModal11() {
    this.setState({ showModal11: true });
  }
  handleOpenModal12() {
    this.setState({ showModal12: true });
  }
  handleOpenModal13() {
    this.setState({ showModal13: true });
  }
  handleOpenModal14() {
    this.setState({ showModal14: true });
  }
  handleOpenModal15() {
    this.setState({ showModal15: true });
  }
  handleOpenModal16() {
    this.setState({ showModal16: true });
  }
  handleOpenModal17() {
    this.setState({ showModal17: true });
  }
  handleOpenModal18() {
    this.setState({ showModal18: true });
  }
  handleOpenModal19() {
    this.setState({ showModal19: true });
  }
  handleOpenModal20() {
    this.setState({ showModal20: true });
  }
  handleOpenModal21() {
    this.setState({ showModal21: true });
  }
  handleOpenModal22() {
    this.setState({ showModal22: true });
  }
  handleOpenModal23() {
    this.setState({ showModal23: true });
  }
  handleOpenModal24() {
    this.setState({ showModal24: true });
  }
  handleOpenModal25() {
    this.setState({ showModal25: true });
  }
  handleOpenModal26() {
    this.setState({ showModal26: true });
  }
  handleOpenModal27() {
    this.setState({ showModal27: true });
  }
  handleOpenModal28() {
    this.setState({ showModal28: true });
  }
  handleOpenModal29() {
    this.setState({ showModal29: true });
  }
  handleOpenModal30() {
    this.setState({ showModal30: true });
  }
  handleOpenModal31() {
    this.setState({ showModal31: true });
  }
  handleOpenModal32() {
    this.setState({ showModal32: true });
  }
  handleOpenModal33() {
    this.setState({ showModal33: true });
  }
  handleOpenModal34() {
    this.setState({ showModal34: true });
  }
  handleOpenModal35() {
    this.setState({ showModal35: true });
  }
  handleOpenModal36() {
    this.setState({ showModal36: true });
  }
  handleOpenModal37() {
    this.setState({ showModal37: true });
  }
  handleOpenModal38() {
    this.setState({ showModal38: true });
  }
  handleOpenModal39() {
    this.setState({ showModal39: true });
  }
  handleOpenModal40() {
    this.setState({ showModal40: true });
  }
  handleOpenModal41() {
    this.setState({ showModal41: true });
  }
  handleOpenModal42() {
    this.setState({ showModal42: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  handleCloseModal2() {
    this.setState({ showModal2: false });
  }
  handleCloseModal3() {
    this.setState({ showModal3: false });
  }
  handleCloseModal4() {
    this.setState({ showModal4: false });
  }
  handleCloseModal5() {
    this.setState({ showModal5: false });
  }
  handleCloseModal6() {
    this.setState({ showModal6: false });
  }
  handleCloseModal7() {
    this.setState({ showModal7: false });
  }
  handleCloseModal8() {
    this.setState({ showModal8: false });
  }
  handleCloseModal9() {
    this.setState({ showModal9: false });
  }
  handleCloseModal10() {
    this.setState({ showModal10: false });
  }
  handleCloseModal11() {
    this.setState({ showModal11: false });
  }
  handleCloseModal12() {
    this.setState({ showModal12: false });
  }
  handleCloseModal13() {
    this.setState({ showModal13: false });
  }
  handleCloseModal14() {
    this.setState({ showModal14: false });
  }
  handleCloseModal15() {
    this.setState({ showModal15: false });
  }
  handleCloseModal16() {
    this.setState({ showModal16: false });
  }
  handleCloseModal17() {
    this.setState({ showModal17: false });
  }
  handleCloseModal18() {
    this.setState({ showModal18: false });
  }
  handleCloseModal19() {
    this.setState({ showModal19: false });
  }
  handleCloseModal20() {
    this.setState({ showModal20: false });
  }
  handleCloseModal21() {
    this.setState({ showModal21: false });
  }
  handleCloseModal22() {
    this.setState({ showModal22: false });
  }
  handleCloseModal23() {
    this.setState({ showModal23: false });
  }
  handleCloseModal24() {
    this.setState({ showModal24: false });
  }
  handleCloseModal25() {
    this.setState({ showModal25: false });
  }
  handleCloseModal26() {
    this.setState({ showModal26: false });
  }
  handleCloseModal27() {
    this.setState({ showModal27: false });
  }
  handleCloseModal28() {
    this.setState({ showModal28: false });
  }
  handleCloseModal29() {
    this.setState({ showModal29: false });
  }
  handleCloseModal30() {
    this.setState({ showModal30: false });
  }
  handleCloseModal31() {
    this.setState({ showModal31: false });
  }
  handleCloseModal32() {
    this.setState({ showModal32: false });
  }
  handleCloseModal33() {
    this.setState({ showModal33: false });
  }
  handleCloseModal34() {
    this.setState({ showModal34: false });
  }
  handleCloseModal35() {
    this.setState({ showModal35: false });
  }
  handleCloseModal36() {
    this.setState({ showModal36: false });
  }
  handleCloseModal37() {
    this.setState({ showModal37: false });
  }
  handleCloseModal38() {
    this.setState({ showModal38: false });
  }
  handleCloseModal39() {
    this.setState({ showModal39: false });
  }
  handleCloseModal40() {
    this.setState({ showModal40: false });
  }
  handleCloseModal41() {
    this.setState({ showModal41: false });
  }
  handleCloseModal42() {
    this.setState({ showModal42: false });
  }

  render() {
    return (
      <div id="app" className="App">
        <Helmet>
          <title>UpGaming</title>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>"
          />
        </Helmet>
        <h1 className="mb-8 text-5xl text-center md:text-9xl mt-52">
          UpGaming
        </h1>
        <h2 className="mb-56 text-4xl text-center md:text-3xl">
          Have a look at these upcoming video games
        </h2>
        <div></div>
        <div className="flex flex-col items-start content-center justify-center w-2/3 gap-5 mx-auto mb-10 sm:w-3/4 md:flex-row md:flex-wrap">
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/SIFU.png"}
                className="rounded-md game-box game-box-bg"
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
            <button onClick={this.handleOpenModal}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Sifu is the story of a young Kung Fu student on a path of
                revenge, hunting for the murderers of his family. One against
                all, he has no allies, and countless enemies. He has to rely on
                his unique mastery of Kung Fu as well as a mysterious pendant to
                prevail, and preserve his family’s legacy.
              </p>
              <p className="pb-4">Developed by and published by Sloclap</p>
              <span className="pb-10 text-sm italic text-gray-400">
                I know gōngfu
              </span>
              <YoutubeEmbed embedId="1FQ1YO3Ks2U"></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/HFW.png"}
                className="rounded-md game-box game-box-bg"
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
            <button onClick={this.handleOpenModal2}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal2}
              onRequestClose={this.handleCloseModal2}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-16 md:inset-x-20 lg:inset-x-96 px-16 py-20 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Horizon Forbidden West continues the story of Aloy, a young
                huntress of the Nora tribe sent on a quest to the arcane
                frontier known as the Forbidden West to find the source of a
                mysterious plague that kills all it infects. On her journey
                across these uncharted lands, Aloy encounters hostile regions
                ravaged by massive storms and occupied by dangerous enemies and
                deadly machines.
              </p>
              <p className="pb-4">
                Developed by Guerrilla Games and Published by PlayStation
                Studios
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Lance Reddick controlling an empire of robotic animals? Hell
                yeah.
              </span>
              <YoutubeEmbed embedId="Lq594XmpPBg"></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal2}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/ELDENRING.png"}
                className="rounded-md game-box game-box-bg"
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
            <button onClick={this.handleOpenModal3}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal3}
              onRequestClose={this.handleCloseModal3}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Elden Ring takes place in the realm of the Lands Between,
                sometime after the destruction of the titular Elden Ring and the
                scattering of its shards, the Great Runes. Once graced by the
                Ring and the Erdtree which symbolizes its presence, the realm is
                now ruled over by the demigod offspring of Queen Marika the
                Eternal, each possessing a shard of the Ring that corrupts and
                taints them with power.
              </p>
              <p className="pb-4">
                Developed by FromSoftware and Published by Bandai Namco
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                OOOOOOOOOOOOOOOHHHHHHHHHHHHHHHHHHHHH
              </span>
              <YoutubeEmbed embedId="E3Huy2cdih0"></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal3}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/Arceus.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal4}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal4}
              onRequestClose={this.handleCloseModal4}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Pokémon Legends: Arceus is an upcoming 2022 action role-playing
                game developed by Game Freak and published by Nintendo and The
                Pokémon Company for the Nintendo Switch. It is part of the
                eighth generation of the Pokémon video game series and is set in
                the same region as Pokémon Diamond and Pearl and their remakes.
              </p>
              <p className="pb-4">
                Developed by Game Freak and Published by Nintendo and The
                Pokémon Company
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                I would die for Hisuian Voltorb
              </span>
              <YoutubeEmbed embedId="YUW1ZWAq09M"></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal4}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/R6Extract.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal5}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal5}
              onRequestClose={this.handleCloseModal5}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Tom Clancy's Rainbow Six Extraction is an upcoming tactical
                shooter developed by Ubisoft Montreal and published by Ubisoft.
                A spin-off of Rainbow Six Siege, Extraction is a cooperative
                multiplayer game in which players must work together to combat
                and defeat a type of parasite-like aliens called the Archaeans.
              </p>
              <p className="pb-4">
                Developed by Ubisoft Montreal and published by Ubisoft
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Who's the real monster here? Caveira players or the alien?
              </span>
              <YoutubeEmbed
                embedId="oFzsANuSbdw"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal5}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/DL2.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Dying Light 2 Cover Art"
              ></img>
              <img
                src={"assets/Logo/DL2.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "100px" }}
                alt="Dying Light 2 Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/Techland.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "90px", bottom: "-20px" }}
                alt="Techland Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal6}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal6}
              onRequestClose={this.handleCloseModal6}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Dying Light 2: Stay Human is a first-person open-world action
                game set in an isolated urban landscape after a zombie
                apocalypse. The Dying Light series puts a big emphasis on
                traversal, providing you with parkour abilities so you can make
                your way through its desolate urban landscape quickly and
                effectively.
              </p>
              <p className="pb-4">Developed and published by Techland</p>
              <span className="pb-10 text-sm italic text-gray-400">
                Zombies are a great motivator to learn parkour
              </span>
              <YoutubeEmbed
                embedId="UwJAAy7tPhE"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal6}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/Black.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal7}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal7}
              onRequestClose={this.handleCloseModal7}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Triangle Strategy is an upcoming tactical role playing video
                game by Square Enix. Development is led by Tomoya Asano,
                producer of the Bravely Default and Octopath Traveler games. It
                is scheduled for release on the Nintendo Switch on March 4,
                2022.
              </p>
              <p className="pb-4">
                Developed by Artdink and Square Enix and published by Nintendo
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                It wasn't very hard to make this card
              </span>
              <YoutubeEmbed
                embedId="wqv3Es1oJyE"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal7}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/TTW.png"}
                className="rounded-md game-box game-box-bg"
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
            <button onClick={this.handleOpenModal8}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal8}
              onRequestClose={this.handleCloseModal8}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Tiny Tina's Wonderlands is an action role-playing first-person
                shooter video game developed by Gearbox Software and published
                by 2K Games. It is a spin-off in the Borderlands series and a
                successor to Borderlands 2: Tiny Tina's Assault on Dragon Keep
              </p>
              <p className="pb-4">
                Developed by Gearbox Software and published by 2K Games
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                I would die for Hisuian Voltorb
              </span>
              <YoutubeEmbed
                embedId="Ikqs6B4ozM0"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal8}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/GOWR.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="God of War: Ragnorak Cover Art"
              ></img>
              <img
                src={"assets/Logo/GOWR.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                alt="God of War: Ragnorak Logo"
                style={{ top: "-180px", left: "15px" }}
                title=""
              ></img>
              <img
                src={"assets/Studios/ps.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "30px", bottom: "-15px" }}
                alt="PlayStation Studios Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal9}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal9}
              onRequestClose={this.handleCloseModal9}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                God of War Ragnarök is an upcoming action-adventure game
                developed by Santa Monica Studio and will be published by Sony
                Interactive Entertainment. It is scheduled to be released in
                2022 for the PlayStation 4 and PlayStation 5.
              </p>
              <p className="pb-4">
                Developed by Santa Monica Studio and published by Sony
                Interactive Entertainment
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Kratos and Atreus experiences what it feels like to be in Canada
              </span>
              <YoutubeEmbed
                embedId="EE-4GvjKcfs"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal9}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Forspoken.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Forspoken Cover Art"
              ></img>
              <img
                src={"assets/Logo/Forspoken.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                alt="Forspoken Logo"
                style={{ left: "15px", top: "-210px" }}
                title=""
              ></img>
              <img
                src={"assets/Studios/SQBlack.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "80px", bottom: "-30px", right: "5px" }}
                alt="Square Enix Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal10}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal10}
              onRequestClose={this.handleCloseModal10}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Forspoken is an upcoming action role-playing video game
                developed by Luminous Productions and published by Square Enix.
                It is to be released on May 24, 2022 for Microsoft Windows and
                PlayStation 5.
              </p>
              <p className="pb-4">
                Developed by Luminous Productions and published by Square Enix
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Her bracelet can talk! It's also from Sussex!
              </span>
              <YoutubeEmbed
                embedId="AdZUrXCqUck"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal10}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Stalker2.png"}
                className="rounded-md game-box game-box-bg brightness-50"
                data-atropos-offset="-4"
                alt="Stalker 2 Art"
              ></img>
              <img
                src={"assets/Logo/Stalker2.png"}
                className="game-box-logo game-box drop-shadow-2xl"
                data-atropos-offset="5"
                alt="Stalker 2 Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/GameWorld.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "auto", bottom: "-20px", right: "10px" }}
                alt="Game World Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal11}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal11}
              onRequestClose={this.handleCloseModal11}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                S.T.A.L.K.E.R. 2: Heart of Chernobyl is an upcoming first-person
                shooter game developed and published by GSC Game World. Set to
                release for Microsoft Windows and the Xbox Series X/S in April
                2022, it will be the fourth game released in the S.T.A.L.K.E.R.
                video game series, the first game in the series released on
                consoles, as well as the first S.T.A.L.K.E.R. game in 13 years
                since the release of Call of Pripyat in 2009.
              </p>
              <p className="pb-4">Developed and published by GSC Game World</p>
              <span className="pb-10 text-sm italic text-gray-400">
                Good Hunting, STALKER.
              </span>
              <YoutubeEmbed
                embedId="SjDMwsbaSd8"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal11}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/Kirby.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal12}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal12}
              onRequestClose={this.handleCloseModal12}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Kirby and the Forgotten Land is an upcoming 3D platformer Kirby
                game developed by HAL Laboratory and published by Nintendo for
                the Nintendo Switch. The game was announced in a Nintendo Direct
                on September 23, 2021 and is planned to release worldwide in
                Spring 2022.
              </p>
              <p className="pb-4">
                Developed by HAL Laboratory and published by Nintendo
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Btw, it's canon that Kirby has killed a god
              </span>
              <YoutubeEmbed
                embedId="H3LAkr0ANgw"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal12}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Redfall.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Redfall Art"
              ></img>
              <img
                src={"assets/Logo/Redfall.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "-165px", left: "15px" }}
                alt="Redfall Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/Bethesda.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "80px", bottom: "-20px", right: "10px" }}
                alt="Bethesda Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal13}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal13}
              onRequestClose={this.handleCloseModal13}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Redfall is an upcoming action-adventure game developed by Arkane
                Studios and published by Bethesda Softworks. The game is set to
                be released for Microsoft Windows and Xbox Series X/S in Summer
                2022.
              </p>
              <p className="pb-4">
                Developed by Arkane Studios and published by Bethesda Softworks
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Of course Massachusetts gets infested with vampires.
              </span>
              <YoutubeEmbed
                embedId="3pWjcqXnP2g"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal13}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/SR.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal14}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal14}
              onRequestClose={this.handleCloseModal14}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Saints Row is an upcoming action-adventure game and reboot of
                the Saints Row series. Developed by Volition and published by
                Deep Silver, it is scheduled for release on August 23, 2022 for
                PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, and
                Windows platforms.
              </p>
              <p className="pb-4">
                Developed by Volition and published by Deep Silver
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                All I need to know is if I can change certain...attributes of my
                characters
              </span>
              <YoutubeEmbed
                embedId="YgjzDJA1o1E"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal14}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Starfield.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Starfield Art"
              ></img>
              <img
                src={"assets/Logo/Starfield.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "0", left: "15px" }}
                alt="Starfield Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/Bethesda.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "80px", bottom: "-20px", right: "10px" }}
                alt="Bethesda Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal15}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal15}
              onRequestClose={this.handleCloseModal15}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Starfield is an upcoming action role-playing video game
                developed by Bethesda Game Studios and published by Bethesda
                Softworks. The game was formally announced during Bethesda's E3
                Press Conference in 2018. The game was described as a wholly
                new, next-generation experience set in an entirely new
                space-themed world.
              </p>
              <p className="pb-4">
                Developed by Bethesda Game Studios and published by Bethesda
                Softworks
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                But can we climb ladders?
              </span>
              <YoutubeEmbed
                embedId="pYqyVpCV-3c"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal15}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Minecraft.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
              <img
                src={"assets/Studios/Mojang.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "50px", bottom: "-15px", right: "5px" }}
                alt="Mojang Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal16}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal16}
              onRequestClose={this.handleCloseModal16}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                The Wild Update is the name of an upcoming major themed update
                set to release in 2022 as Java Edition 1.19 and Bedrock Edition
                1.19.0. It adds the Deep Dark biome, along with the warden,
                sculk blocks and the Ancient Cities, and makes various other
                biomes more atmospheric and immersive. In addition, it also
                introduces several new mobs and biome variants.
              </p>
              <p className="pb-4">Developed and published by Mojang</p>
              <span className="pb-10 text-sm italic text-gray-400">
                "Mud blocks and mangroves! Frogs and tadpoles! Chests in boats!
                The deep dark! The warden! The warden? The warden!!! Eeeek"
              </span>
              <YoutubeEmbed
                embedId="or1DfXdqu3U"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal16}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/LEGO.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="LEGO Star Wars: The Skywalker Saga Art"
              ></img>
              <img
                src={"assets/Logo/LEGO.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "125px", left: "15px" }}
                alt="LEGO Star Wars: The Skywalker Saga Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/WB.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "40px", bottom: "-10px", right: "5px" }}
                alt="Warner Brothers Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal17}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal17}
              onRequestClose={this.handleCloseModal17}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Lego Star Wars: The Skywalker Saga is an upcoming Lego-themed
                action-adventure game developed by Traveller's Tales and
                published by Warner Bros. Interactive Entertainment. It will be
                the sixth entry in TT Games' Lego Star Wars series of video
                games and the successor to Lego Star Wars: The Force Awakens.
              </p>
              <p className="pb-4">
                Developed by Traveller's Tales and published by Warner Bros.
                Interactive Entertainment
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                I want to become a Lego figure, like my father before me.
              </span>
              <YoutubeEmbed
                embedId="2yTr5oS99_c"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal17}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/Loz.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal18}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal18}
              onRequestClose={this.handleCloseModal18}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                An untitled sequel to the 2017 action-adventure game The Legend
                of Zelda: Breath of the Wild is in development by Nintendo. The
                sequel is part of The Legend of Zelda series and is currently
                aimed to be released in 2022 for the Nintendo Switch
              </p>
              <p className="pb-4">Developed and published by Nintendo</p>
              <span className="pb-10 text-sm italic text-gray-400">
                Can't wait for all the speedruns.
              </span>
              <YoutubeEmbed
                embedId="3fr1Z07AV00"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal18}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/GWT.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Ghostwire Tokyo Art"
              ></img>
              <img
                src={"assets/Logo/GWT.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "120px", left: "15px" }}
                alt="Ghostwire Tokyo Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/Bethesda.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "80px", bottom: "-20px", right: "10px" }}
                alt="Bethesda Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal19}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal19}
              onRequestClose={this.handleCloseModal19}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Ghostwire: Tokyo is an upcoming action-adventure game developed
                by Tango Gameworks and published by Bethesda Softworks. The game
                is set to be released worldwide in 2022 for Microsoft Windows
                and as a timed console exclusive for PlayStation 5.
              </p>
              <p className="pb-4">
                Developed by Tango Gameworks and published by Bethesda Softworks
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                It's spoooky.
              </span>
              <YoutubeEmbed
                embedId="l4tkNjJsOvY"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal19}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Sonic.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Sonic Frontiers Tokyo Art"
              ></img>
              <img
                src={"assets/Logo/Sonic.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "-120px", left: "15px" }}
                alt="Sonic Frontiers Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/Sega.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "80px", bottom: "-20px", right: "10px" }}
                alt="Sega Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal20}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal20}
              onRequestClose={this.handleCloseModal20}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Sonic Frontiers is an upcoming platform game developed by Sonic
                Team and published by Sega. It is the first Sonic the Hedgehog
                game to feature open-world gameplay; as Sonic, the player
                explores the Starfall Islands, which comprise various biomes.
              </p>
              <p className="pb-4">
                Developed by Sonic Team and published by Sega
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Uhh...Meow?
              </span>
              <YoutubeEmbed
                embedId="RRkKZG1z9PY"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal20}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Stray.png"}
                className="rounded-md game-box game-box-bg"
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
            <button onClick={this.handleOpenModal21}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal21}
              onRequestClose={this.handleCloseModal21}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Stray is an upcoming adventure game developed by BlueTwelve
                Studio and published by Annapurna Interactive. Formerly known as
                HK_Project, the game is scheduled for release in early 2022 for
                Microsoft Windows, PlayStation 4, and PlayStation 5.
              </p>
              <p className="pb-4">
                Developed by BlueTwelve Studio and published by Annapurna
                Interactive
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Uhh...Meow?
              </span>
              <YoutubeEmbed
                embedId="u84hRUQlaio"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal21}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/SS.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal22}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal22}
              onRequestClose={this.handleCloseModal22}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Suicide Squad: Kill the Justice League is an upcoming
                action-adventure game developed by Rocksteady Studios and
                published by Warner Bros. Interactive Entertainment.
              </p>
              <p className="pb-4">
                Developed by Rocksteady Studios and published by Warner Bros.
                Interactive Entertainment
              </p>
              <span className="pb-10 text-sm italic text-gray-400">Bird.</span>
              <YoutubeEmbed
                embedId="2EVFYstVuVk"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal22}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/Splatoon3.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal23}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal23}
              onRequestClose={this.handleCloseModal23}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Splatoon 3 is an upcoming third-person shooter video game
                developed and published by Nintendo for the Nintendo Switch
                console. Like its predecessors in the Splatoon series, the game
                consists of competitive online multiplayer matches alongside a
                story-driven single-player mode.
              </p>
              <p className="pb-4">Developed and published by Nintendo</p>
              <span className="pb-10 text-sm italic text-gray-400">
                You're a kid. You're a squid. You're a kid. You're a squid.
                You're a kid. You're a squid. You're a kid. You're a squid.
                You're a kid. You're a squid.
              </span>
              <YoutubeEmbed
                embedId="GUYDXVDLmns"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal23}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Hogwarts.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Hogwarts Legacy Art"
              ></img>
              <img
                src={"assets/Logo/Hogwarts.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "0" }}
                alt="Hogwarts Legacy Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/WB.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "40px", bottom: "-10px", right: "5px" }}
                alt="Warner Brothers Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal24}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal24}
              onRequestClose={this.handleCloseModal24}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Hogwarts Legacy is an upcoming open-world, action role-playing
                video game set in the late 1800s in the Wizarding World being
                developed by Avalanche Software and published by Warner Bros.
                Interactive Entertainment under its Portkey Games label.
              </p>
              <p className="pb-4">
                Developed by Avalance Software and published by Warner Bros.
                Interactive Entertainment
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Hogwarts didn't always have bathrooms. Before adopting Muggle
                plumbing methods in the eighteenth century, witches and wizards
                simply relieved themselves wherever they stood, and vanished the
                evidence.
              </span>
              <YoutubeEmbed
                embedId="1O6Qstncpnc"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal24}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Warhammer.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Total War: Warhammer 3 Art"
              ></img>
              <img
                src={"assets/Logo/Warhammer.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ top: "150px" }}
                alt="Total War: Warhammer 3 Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/CreativeAssembly.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "40px", bottom: "-10px", right: "5px" }}
                alt="Creative Assembly Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal25}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal25}
              onRequestClose={this.handleCloseModal25}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Total War: Warhammer III is an upcoming turn-based strategy and
                real-time tactics video game developed by Creative Assembly and
                published by Sega. It is part of the Total War series, and the
                third to be set in Games Workshop's Warhammer Fantasy fictional
                universe.
              </p>
              <p className="pb-4">
                Developed by Creative Assembly and published by Sega
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Get ready for your computer to get toasty
              </span>
              <YoutubeEmbed
                embedId="033FWxL22A0"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal25}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/FFOrigin.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Stranger of Paradise: Final Fantasy Origin Cover Art"
              ></img>
              <img
                src={"assets/Logo/FFOrigin.png"}
                className="game-box-logo game-box drop-shadow-2xl"
                data-atropos-offset="5"
                alt="Stranger of Paradise: Final Fantasy Origin Logo"
                style={{ top: "-60px" }}
                title=""
              ></img>
              <img
                src={"assets/Studios/SQBlack.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "100px", bottom: "-20px", right: "10px" }}
                alt="Square Enix Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal26}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal26}
              onRequestClose={this.handleCloseModal26}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Stranger of Paradise: Final Fantasy Origin is an upcoming action
                role-playing game developed by Koei Tecmo Games and Team Ninja,
                and published by Square Enix.
              </p>
              <p className="pb-4">
                Developed by Koei Tecmo Games and Team Ninja and published by
                Square Enix
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Bullsh*t. *Limp Bizkit plays*
              </span>
              <YoutubeEmbed
                embedId="heLn5URnZCc"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal26}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/GK.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Gotham Knights Art"
              ></img>
              <img
                src={"assets/Logo/GK.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ left: "15px" }}
                alt="Gotham Knights Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/WB.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "40px", bottom: "-10px", right: "5px" }}
                alt="Warner Brothers Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal27}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal27}
              onRequestClose={this.handleCloseModal27}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Gotham Knights is an upcoming action role-playing game developed
                by WB Games Montréal and published by Warner Bros. Interactive
                Entertainment.
              </p>
              <p className="pb-4">
                Developed by WB Games Montréal published by Warner Bros.
                Interactive Entertainment
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Batman may cause internal bleeding and life-lasting injuries,
                but he doesn't kill
              </span>
              <YoutubeEmbed
                embedId="IhVf_3TeTQE"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal27}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/MMS.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Marvel's Midnight Suns Art"
              ></img>
              <img
                src={"assets/Logo/MMS.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                style={{ left: "22px" }}
                alt="Marvel's Midnight Suns Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/2K.svg"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "40px", bottom: "-10px", right: "5px" }}
                alt="2K Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal28}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal28}
              onRequestClose={this.handleCloseModal28}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Marvel's Midnight Suns is an upcoming tactical role-playing game
                developed by Firaxis Games in collaboration with Marvel Games.
                It will feature comic book characters from multiple Marvel
                properties, such as Midnight Sons, Avengers, X-Men, and
                Runaways.
              </p>
              <p className="pb-4">
                Developed by Firaxis Games and published by 2K Games
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Pretty sure one of these heroes died...
              </span>
              <YoutubeEmbed
                embedId="Ripgh8W2PMg"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal28}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/PTR.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal29}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal29}
              onRequestClose={this.handleCloseModal29}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                A Plague Tale: Requiem is a narrative-driven, action-adventure
                survival horror stealth video game in development by Asobo
                Studio and published by Focus Entertainment. A Plague Tale:
                Requiem is the direct sequel to A Plague Tale: Innocence, and
                sees players embark with an older Amicia de Rune and her
                brother, Hugo, on an intense new quest for hope, as a terrifying
                curse hunts them down.
              </p>
              <p className="pb-4">
                Developed by Asobo Studio and published by Focus Entertainment
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                I don't know how my computer rendered all those rats without
                exploding
              </span>
              <YoutubeEmbed
                embedId="aPKIQgc0Fnw"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal29}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Gollum.png"}
                className="rounded-md game-box game-box-bg brightness-100"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal30}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal30}
              onRequestClose={this.handleCloseModal30}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                The Lord of the Rings: Gollum is an upcoming action-adventure
                game developed by Daedalic Entertainment and co-published by
                Daedalic Entertainment and Nacon. It is based on The Lord of the
                Rings and follows the character of Gollum before the events of
                The Lord of the Rings and The Hobbit.
              </p>
              <p className="pb-4">
                Developed by Daedalic Entertainment and published by Daedalic
                Entertainment and Nacon
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                I would like Andy Serkis to act out in-person while I play this
                game. While he's in his suit.
              </span>
              <YoutubeEmbed
                embedId="Qv2YBl9LL3s"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal30}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Avatar.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal31}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal31}
              onRequestClose={this.handleCloseModal31}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Avatar: Frontiers of Pandora is an upcoming open-world
                action-adventure video game based on James Cameron's Avatar film
                series. The game is being developed by Massive Entertainment and
                will be published by Ubisoft for Microsoft Windows, PlayStation
                5, Xbox Series X/S, Amazon Luna and Stadia in 2022.
              </p>
              <p className="pb-4">
                Developed by Massive Entertainment and published by Ubisoft
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                I wonder if this is based off a movie
              </span>
              <YoutubeEmbed
                embedId="Axmg1E4HrVE"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal31}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/M+R.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal32}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal32}
              onRequestClose={this.handleCloseModal32}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Mario + Rabbids Sparks of Hope is an upcoming turn-based
                strategy adventure game developed by Ubisoft Milan and published
                by Ubisoft for the Nintendo Switch. The game is a crossover
                between Nintendo's Mario and Ubisoft's Raving Rabbids franchises
                and a sequel to the 2017 game Mario + Rabbids Kingdom Battle
              </p>
              <p className="pb-4">
                Developed by Ubisoft Milan and published by Ubisoft
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                It's a me, Chris Pratt
              </span>
              <YoutubeEmbed
                embedId="VHIuHMv3t88"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal32}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/TCP.png"}
                className="rounded-md game-box game-box-bg brightness-75"
                data-atropos-offset="-4"
                alt="The Callisto Protocol Art"
                style={{ objectPosition: "left" }}
              ></img>
              <img
                src={"assets/Studios/Krafton.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ bottom: "-20px", right: "10px", width: "90px" }}
                alt="KRAFTON Logo"
              ></img>
              <img
                src={"assets/Logo/TCP.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                alt="The Callisto Protocol Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal33}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal33}
              onRequestClose={this.handleCloseModal33}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                The Callisto Protocol is an upcoming third-person survival
                horror game scheduled for release in 2022. The game is being
                developed by Striking Distance Studios, founded by Glen
                Schofield, who had previously co-created the Dead Space series.
              </p>
              <p className="pb-4">
                Developed by Striking Distance Studios and published by KRAFTON
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                This takes place in the same universe as PUBG. No, I am not
                joking.
              </span>
              <YoutubeEmbed
                embedId="WnVhgyLbC8A"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal33}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/LDI.png"}
                className="rounded-md game-box game-box-bg"
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
            <button onClick={this.handleOpenModal34}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal34}
              onRequestClose={this.handleCloseModal34}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Little Devil Inside is an upcoming action-adventure video game
                developed and published by Neostream Interactive, a studio based
                in Seoul. The game's single-player and co-operative multiplayer
                modes both follow the professional and personal lives of
                explorers searching for monsters & supernatural events in a
                19th-century-inspired world.
              </p>
              <p className="pb-4">
                Developed and published by Neostream Interactive
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                인디게임이 최고다!
              </span>
              <YoutubeEmbed
                embedId="QFdoqcJEi8o"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal34}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/KSP2.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal35}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal35}
              onRequestClose={this.handleCloseModal35}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Kerbal Space Program 2 is an upcoming space flight simulation
                video game developed by Intercept Games and published by Private
                Division. It is the sequel to 2015's Kerbal Space Program and is
                scheduled for release in 2022 for Microsoft Windows, PlayStation
                4, PlayStation 5, Xbox One and Xbox Series X/S.
              </p>
              <p className="pb-4">
                Developed by Intercept Games and published by Private Division
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                This is probably the closest you'll get to working at NASA
              </span>
              <YoutubeEmbed
                embedId="P_nj6wW6Gsc"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal35}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/BRC.png"}
                className="rounded-md game-box game-box-bg"
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
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal36}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal36}
              onRequestClose={this.handleCloseModal36}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Bomb Rush Cyberfunk is an upcoming action-adventure game
                developed and published by Team Reptile. It will be released on
                Steam for Microsoft Windows sometime in 2022.
              </p>
              <p className="pb-4">Developed and published by Team Reptile</p>
              <span className="pb-10 text-sm italic text-gray-400">
                Not to be confused with Jet Set Radio
              </span>
              <YoutubeEmbed
                embedId="1mptdlfRJkw"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal36}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/KOFXV.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                style={{ objectPosition: "" }}
                alt="The King of Fighters XV Art"
              ></img>
              <img
                src={"assets/Studios/SNK.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ bottom: "-20px", right: "5px", width: "80px" }}
                alt="SNK Logo"
              ></img>
              <img
                src={"assets/Logo/KOFXV.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                alt="The King of Fighters XV Logo"
                style={{ width: "auto", left: "0" }}
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal37}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal37}
              onRequestClose={this.handleCloseModal37}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                The King of Fighters XV, also called KOF XV, is an upcoming
                fighting game developed by SNK. It is scheduled for release on
                February 17, 2022 for Microsoft Windows, PlayStation 4,
                PlayStation 5, and Xbox Series X/S. This is also the first game
                in The King of Fighters series to use Unreal Engine 4 and the
                first to use GGPO rollback networking.
              </p>
              <p className="pb-4">Developed and published by SNK</p>
              <span className="pb-10 text-sm italic text-gray-400">
                Are you okay? Buster Wolf!
              </span>
              <YoutubeEmbed
                embedId="_o7Ip64-Sio"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal37}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/TMNT.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                style={{ objectPosition: "" }}
                alt="Teenage Mutant Ninja Turtles: Shredder's Revenge Art"
              ></img>
              <img
                src={"assets/Studios/Tribute.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ bottom: "-15px", right: "5px", width: "40px" }}
                alt="Tribute Games Logo"
              ></img>
              <img
                src={"assets/Logo/TMNT.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                alt="Teenage Mutant Ninja Turtles: Shredder's Revenge Logo"
                style={{ width: "auto", top: "-160px", left: "-10px" }}
                title=""
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal38}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal38}
              onRequestClose={this.handleCloseModal38}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Teenage Mutant Ninja Turtles: Shredder's Revenge is an upcoming
                side-scrolling beat 'em up video game developed by Tribute Games
                and published by Dotemu. It is based on the Teenage Mutant Ninja
                Turtles franchise, and inspired by the 1987 animated series and
                the games based on it.
              </p>
              <p className="pb-4">
                Developed by Tribute Games and published by Dotemu
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                I really hope they tip their pizza delivery guy generously
              </span>
              <YoutubeEmbed
                embedId="13qJvTq7_KA"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal38}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Chocobo.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Chocobo GP Cover Art"
              ></img>
              <img
                src={"assets/Logo/Chocobo.png"}
                className="game-box-logo game-box drop-shadow-2xl"
                data-atropos-offset="5"
                alt="Chocobo GP Logo"
                style={{ top: "60px" }}
                title=""
              ></img>
              <img
                src={"assets/Studios/SQ.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "100px", bottom: "-25px", right: "0px" }}
                alt="Square Enix Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal39}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal39}
              onRequestClose={this.handleCloseModal39}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Chocobo GP is an upcoming kart racing video game developed and
                published by Square Enix. Chocobo GP is a spinoff of the Final
                Fantasy series, features locales and characters from across the
                franchise, and is a sequel to 1999's Chocobo Racing. It is
                scheduled for release for the Nintendo Switch on March 10, 2022.
              </p>
              <p className="pb-4">Developed and published by Square Enix</p>
              <span className="pb-10 text-sm italic text-gray-400">
                Game of the Decade
              </span>
              <YoutubeEmbed
                embedId="pY9weUmUw_0"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal39}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos className="atropos">
              <img
                src={"assets/Cover Art/Black.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Black Cover Art"
              ></img>
              <img
                src={"assets/Logo/WeirdWest.png"}
                className="game-box-logo game-box drop-shadow-2xl"
                data-atropos-offset="5"
                alt="Weird West Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/Devolver.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "150px", bottom: "-15px", right: "-20px" }}
                alt="Devolver Digital Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal40}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal40}
              onRequestClose={this.handleCloseModal40}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Weird West is an upcoming action role-playing video game
                developed by WolfEye Studios and published by Devolver Digital.
                The game is set to be released for Windows, PlayStation 4 and
                Xbox One in March 2022.
              </p>
              <p className="pb-4">
                Developed by WolfEye Studios and published by Devolver Digital
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                Welcome to the Weird West.
              </span>
              <YoutubeEmbed
                embedId="0NS3lzv0Nw4"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal40}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/GT7.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Gran Turismo 7 Cover Art"
              ></img>
              <img
                src={"assets/Logo/GT7.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                alt="Gran Turismo 7 Logo"
                title=""
              ></img>
              <img
                src={"assets/Studios/ps.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "30px", bottom: "-15px" }}
                alt="PlayStation Studios Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal41}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal41}
              onRequestClose={this.handleCloseModal41}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Gran Turismo 7 is an upcoming racing video game developed by
                Polyphony Digital and published by Sony Interactive
                Entertainment. The game will be the eighth mainline installment
                in the Gran Turismo series.
              </p>
              <p className="pb-4">
                Developed by Polyphony Digital and published by Sony Interactive Entertainment
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
              Vrrrrooooooooommm responsibly.
              </span>
              <YoutubeEmbed
                embedId="1tBUsXIkG1A"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal41}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <Atropos>
              <img
                src={"assets/Cover Art/SoS.png"}
                className="rounded-md game-box game-box-bg"
                data-atropos-offset="-4"
                alt="Sea of Stars Cover Art"
              ></img>
              <img
                src={"assets/Logo/SoS.png"}
                className="game-box-logo game-box"
                data-atropos-offset="5"
                alt="Sea of Stars Logo"
                style={{ top: "180px" }}
              ></img>
              <img
                src={"assets/Studios/Sabotage.png"}
                className="game-box-studio game-box"
                data-atropos-offset="3"
                style={{ width: "30px", bottom: "-15px" }}
                alt="Sabotage Logo"
              ></img>
            </Atropos>
            <button onClick={this.handleOpenModal42}>More Info</button>
            <ReactModal
              isOpen={this.state.showModal42}
              onRequestClose={this.handleCloseModal42}
              className={
                "fixed sm:inset-10 md:inset-36 lg:inset-20 md:inset-x-20 lg:inset-x-96 px-16 py-14 rounded-lg Modal flex flex-col"
              }
              overlayClassName="Overlay"
            >
              <p className="pb-4 text-white">
                Sea of Stars is a turn-based RPG inspired by the classics. It
                tells the story of two Children of the Solstice who will combine
                the powers of the sun and moon to perform Eclipse Magic, the
                only force capable of fending off the monstrous creations of the
                evil alchemist known as The Fleshmancer.
              </p>
              <p className="pb-4">
                Developed and published by Sabotage Studio
              </p>
              <span className="pb-10 text-sm italic text-gray-400">
                With special guest composer Yasunori Mitsuda! (Chrono Trigger, Chrono Cross, Xeno series)
              </span>
              <YoutubeEmbed
                embedId="vqK-1WGqYmI"
                className="mb-10"
              ></YoutubeEmbed>
              <button
                onClick={this.handleCloseModal42}
                className="absolute inline-flex items-center justify-center p-2 text-gray-100 rounded-md bg-slate-800 top-2 left-3 hover:text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>{" "}
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ReactModal>
          </div>
          <div>
            <h1 className="w-4/6 mx-auto mt-20 text-2xl text-center md:text-2xl">
              Where's my favorite game?
            </h1>
            <p className="w-4/6 mx-auto mt-5 text-lg text-center">
              Unfortunately, these things take time! If you haven't already
              guessed, there's loads upon loads of games coming out in 2022.
              Please be patient, I may get around to it sooner or later.
            </p>
            <h1 className="w-4/6 mx-auto mt-10 text-2xl text-center md:text-2xl">
              Why do you sometimes use pictures that aren't the official covers?
            </h1>
            <p className="w-4/6 mx-auto mt-5 text-lg text-center">
              I would if I could. However, some covers do not have a clean
              logoless version out there, so I resort to having to use something
              else, preferably an asset from the studio themselves.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
