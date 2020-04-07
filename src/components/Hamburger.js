import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "./Animations";

import akcesoria from "../images/keyboard.png";
import service from "../images/service.jpg";
import consulting from "../images/consulting.jpg";
import software from "../images/software.jpg";
import jlc_pop from "../images/jlc_pop.png";

const offer = [
  { name: "Sprzęt", image: akcesoria },
  { name: "Oprogramowanie", image: software },
  { name: "Serwis", image: service },
  { name: "Konsultacje", image: consulting },
  { name: "Sieci", image: jlc_pop },
  { name: "Tusze - Tonery", image: jlc_pop },
  { name: "Kasy fiskalne", image: jlc_pop },
];

const Hamburger = ({ state }) => {
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
  let info = useRef(null);

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
      fadeInUp(info);
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
                    <Link
                      onMouseEnter={(e) =>
                        handleHover(e, offerImage, offer[0].image)
                      }
                      onMouseOut={(e) => handleHoverExit(e, offerImage)}
                      ref={(el) => (line1 = el)}
                      to="/hardware"
                    >
                      {offer[0].name}
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
                      to="/lanmanwan"
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
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <Link to="/contacts">
                  <h3>Kontakt</h3>
                  <p>
                    The passage experienced a surge in popularity during the
                    1960s when Letraset used it on their dry-transfer sheets,
                    and again during the 90s as desktop publishers bundled the
                    text with their software.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
