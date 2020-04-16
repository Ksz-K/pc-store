import React, { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(Timeline);

const Consumables = () => {
  function createHover(cardWrapper) {
    let tlink = new Timeline({ paused: true, reversed: true });
    tlink
      .to(cardWrapper, {
        duration: 1.2,
        rotationY: 180,
        ease: "Back.easeOut",
      })
      .to(cardWrapper, {
        duration: 1.2,
        rotationY: 0,
        ease: "Back.easeOut",
      });
    tlink.play();
  }

  useEffect(() => {
    gsap.to(".menu", { display: "flex" });
    gsap.set(".cardWrapper", { perspective: 800 });
    gsap.set(".card", { transformStyle: "preserve-3d" });
    gsap.set(".back", { rotationY: -180 });
    gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });
  }, []);

  return (
    <div className="inks">
      <div className="cardWrapper d-none d-sm-block">
        <div
          className="card"
          onMouseEnter={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>Tusze</h1>
            <h1>Tonery</h1>
            <h1>Papier</h1>
          </div>
          <div className="cardFace back">
            <img src="./img/inks.png" />
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseEnter={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>HP Inc.</h1>
            <p>Pełny wybór materiałów eksploatacyjnych</p>
          </div>
          <div className="cardFace back">
            <img src="./img/hp.svg" />
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseEnter={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>Lexmark</h1>
            <p>Tusze i zamienniki</p>
          </div>
          <div className="cardFace back">
            <img src="./img/lexmark.svg" />
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseEnter={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>Canon</h1>
            <p>Pełna oferta</p>
          </div>
          <div className="cardFace back">
            <img src="./img/canon.svg" />
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseEnter={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>Brother</h1>
            <p>Tonery</p>
          </div>
          <div className="cardFace back">
            <img src="./img/brother.svg" />
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseEnter={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>XEROX</h1>
            <p>Tonery, tusze i papier</p>
          </div>
          <div className="cardFace back">
            <img src="./img/xerox.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumables;
