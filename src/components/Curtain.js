import React, { useEffect } from "react";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";

let tl = new Timeline({ delay: 0.77 });
const Curtain = () => {
  useEffect(() => {
    tl
      .to(".leftSection", { duration: 1, visibility: "visible" })
      .to(".middleSection", { duration: 1, visibility: "visible" })
      .to(".rightSection", { duration: 1, visibility: "visible" })
      .to(".top", { duration: 0.1, backgroundColor: "rgba(255,255,255,0)" })
      .to(".leftSection", { duration: 1, height: 0, ease: "bounce" }, "left")
      .to(".leftSection h1", { duration: 0.5, opacity: 0 }, "left+=0.2")
      .to(".middleSection", { duration: 1, height: 0, ease: "bounce" }, "middle")
      .to(".middleSection h1", { duration: 0.4, opacity: 0 }, "middle+=0.3")
      .to(".rightSection", { duration: 1, height: 0, ease: "bounce" }, "right")
      .to(".rightSection img", { duration: 0.35, opacity: 0 }, "right+=0.35")
      .to(".center", { duration: 0.1, backgroundColor: "rgba(255,255,255,0)"})
     .to(".center", { duration: 3, width: "100%"},"bottom")
     .to(".side", { duration: 3, width: "0%" },"bottom")
     .to(".curtain", { duration: 0.1, display: "none" },"bottom+=3")
     
     
  });
  return (
    <div className="curtain">
      <div className="top">
        <div className="leftSection">
          <h1>Jesteśmy z Wami od 30 lat...</h1>
        </div>
        <div className="middleSection">
          <h1>Jesteśmy dla Was od 30 lat...</h1>
        </div>
        <div className="rightSection">
          <img src="./img/logo.png" alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="side"></div>
        <div className="center"></div>
        <div className="side"></div>    
      </div>
    </div>
  );
};

export default Curtain;
