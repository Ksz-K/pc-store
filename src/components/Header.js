import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { fadeIn, fadeOut } from "./Animations";

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  const [disabled, setDisabled] = useState(false);

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
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Zwiń"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Zwiń"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div className="header ">
      <div className="inner-header">
        <div ref={el => (LogoJLC = el)} className="logo">
          <Link to="/">
            <img src="./img/logo.png" alt="" />
          </Link>
        </div>
        <div className="menu">
          <button disabled={disabled} onClick={handleMenu}>
            {state.menuName}
          </button>
        </div>
      </div>

      <Hamburger state={state} />
    </div>
  );
};

export default withRouter(Header);
