import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {withRouter, Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
  returnRed,
} from "./Animations";

import hardware from "../images/hardware.jpg";
import software from "../images/software.jpg";
import service from "../images/service.jpg";
import consulting from "../images/consulting.jpg";
import networking from "../images/networking.png";
import inks from "../images/ink.png";
import posnet from "../images/posnet.png";
import jlc_pop from "../images/jlc_pop.png";

const offer = [
  { name: "Sprzęt", image: hardware },
  { name: "Oprogramowanie", image: software },
  { name: "Serwis", image: service },
  { name: "Konsultacje", image: consulting },
  { name: "Sieci", image: networking },
  { name: "Tusze - Tonery", image: inks },
  { name: "Kasy fiskalne", image: posnet },
  { name: "Kontakt", image: jlc_pop },
];

const Hamburger = ({ state, location }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let offerImage = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let line6 = useRef(null);
  let line7 = useRef(null);
  //let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (state.clicked === true) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      //   fadeInUp(info);
      staggerText([line1, line2, line3, line4, line5, line6, line7]);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div
          ref={(el) => (offerImage = el)}
          className="menu-image-background"
        ></div>
        <div className="canister">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to={(location.pathname !== "/hardware") ? "/hardware": null} >
                      <span
                        onMouseEnter={(e) =>
                          handleHover(e, offerImage, offer[0].image)
                        }
                        onMouseOut={(e) => handleHoverExit(e, offerImage)}
                        ref={(el) => (line1 = el)}
                      >
                        {" "}
                        {offer[0].name}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[1].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line2 = el)}
                      to="/software"
                    >
                      {offer[1].name}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[2].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line3 = el)}
                      to="/services"
                    >
                      {offer[2].name}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[3].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line4 = el)}
                      to="/consulting"
                    >
                      {offer[3].name}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[4].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line5 = el)}
                      to="/networking"
                    >
                      {offer[4].name}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[5].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line6 = el)}
                      to="/consumables"
                    >
                      {offer[5].name}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[6].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line7 = el)}
                      to="/pos"
                    >
                      {offer[6].name}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[7].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line7 = el)}
                      to="/contacts"
                    >
                      {offer[7].name}
                    </Link>
                  </li>
                  <li onMouseOver={(e) => returnRed(offerImage)}>></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Hamburger);
