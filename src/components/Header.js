import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { fadeIn, fadeOut } from "./Animations";

gsap.registerPlugin(SplitText);

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  let LogoJLC = useRef(null);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  useEffect(() => {
    if (state.clicked === false) {
      fadeIn(LogoJLC);
    } else if (state.clicked === true) {
      fadeOut(LogoJLC);
    }
  }, [state.clicked]);

  // Toggle menu
  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Zwiń",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Zwiń",
      });
    }
  };

  useEffect(() => {
    let mySplitText = new SplitText(".menuHandle", {
      type: "chars",
      charsClass: "char",
    });

    let gtl = gsap.timeline({ yoyo: true, repeat: -1, delay: 1 });

    function animateText() {
      let menuHandleTl = gsap.timeline().to(".char", {
        fontWeight: 100,
        fontStretch: "10%",
        ease: "sine.inOut",
        duration: 3,
        stagger: {
          each: 0.7,
          yoyo: true,
          repeat: -1,
          delya: 1,
        },
      });

      return menuHandleTl;
    }

    gsap.to(".menuHandle", {
      autoAlpha: 1,
      duration: 1,
      ease: "none",
    });

    gtl.add(animateText()).play();
  });

  return (
    <div className="header ">
      <div className="inner-header">
        <div ref={(el) => (LogoJLC = el)} className="logo">
          <Link to="/contacts">
            <img src="./img/logo.png" alt="" />
          </Link>
        </div>
        <div className="menu">
          <span className="menuHandle" onClick={handleMenu}>
            {state.menuName}
          </span>
        </div>
      </div>

      <Hamburger state={state} />
    </div>
  );
};

export default withRouter(Header);
