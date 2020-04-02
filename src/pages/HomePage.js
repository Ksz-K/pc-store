import React, { Fragment, useEffect, useState } from "react";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import Curtain from "../components/Curtain";
import InfoBoard from "../components/InfoBoard";
import Slider from "../components/Slider";


const homeAnimation = completeAnimation => {
let tl = new Timeline({ delay: .777 });
  tl.to(".left", { duration: 1, visibility: "visible" })
  .to(".middle", { duration: 1, visibility: "visible" })
  .to(".right", { duration: 1, visibility: "visible" })
  .to(".top", { duration: 0.1, backgroundColor: "rgba(255,255,255,0)" })
  .to(".left", { duration: 1, height: 0, ease: "bounce" }, "left")
  .to(".left h1", { duration: 0.5, opacity: 0 }, "left+=0.2")
  .to(".middle", { duration: 1, height: 0, ease: "bounce" }, "middle")
  .to(".middle h1", { duration: 0.4, opacity: 0 }, "middle+=0.3")
  .to(".right", { duration: 1, height: 0, ease: "bounce" }, "right")
  .to(".right img", { duration: 0.35, opacity: 0 }, "right+=0.35")
  .to(".center", { duration: 0.1, backgroundColor: "rgba(255,255,255,0)"})
 .to(".center", { duration: 3, width: "100%"},"bottom")
 .to(".side", { duration: 3, width: "0%" },"bottom")
 .to(".curtain", { duration: 0.1, display: "none", onComplete: completeAnimation },"bottom+=3")
};
const Home = () => {
  
  const [animationComplete, setAnimationComplete] = useState(false);

  // const completeAnimation = () => {
  //   setAnimationComplete(true);
  // };
  // useEffect(() => {
  //   homeAnimation(completeAnimation);
  // }, []);

  return (
    <Fragment>
      {!animationComplete ? <Curtain /> : null}
      <InfoBoard />
      <Slider />
    </Fragment>
  );
};

export default Home;
