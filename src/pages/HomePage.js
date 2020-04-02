import React, { Fragment, useEffect, useState } from "react";
import gsap from "gsap";
import Curtain from "../components/Curtain";
import InfoBoard from "../components/InfoBoard";
import Slider from "../components/Slider";

const homeAnimation = completeAnimation => {
  gsap.to(".curtain", { duration: 100000, css: { display: "none" } });
};
const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <Fragment>
      {!animationComplete ? <Curtain /> : null}
      <InfoBoard />
      <Slider />
    </Fragment>
  );
};

export default Home;
