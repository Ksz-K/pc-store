import React, { useEffect } from "react";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";

let tl = new Timeline({ delay: 0.77 });
const Curtain = () => {
  useEffect(() => {
    tl.to(".left", { duration: 1, visibility: "visible" })
      .to(".middle", { duration: 1, visibility: "visible" })
      .to(".right", { duration: 1, visibility: "visible" })
      .to(".curtain", { duration: 0.1, backgroundColor: "rgba(255,255,255,0" })
      .to(".left", { duration: 1, height: 0, ease: "bounce" }, "left")
      .to(".left h1", { duration: 0.5, opacity: 0 }, "left+=0.2")
      .to(".middle", { duration: 1, height: 0, ease: "bounce" }, "middle")
      .to(".middle", { duration: 0.4, opacity: 0 }, "middle+=0.3")
      .to(".right", { duration: 1, height: 0, ease: "bounce" }, "right")
      .to(".right", { duration: 0.3, opacity: 0 }, "right+=0.4");
  });
  return (
    <div className="curtain">
      <div className="top">
        <div className="left">
          <h1>Jesteśmy z Wami od 30 lat...</h1>
        </div>
        <div className="middle">
          <h1>Jesteśmy dla Was od 30 lat...</h1>
        </div>
        <div className="right">
          <img src="./img/logo.png" alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="first">BL</div>
        <div className="second">BR</div>
      </div>
    </div>
  );
};

export default Curtain;
