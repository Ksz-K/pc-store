import React, { Fragment, useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";
import { Timeline } from "gsap/gsap-core";
import uniqid from "uniqid";

gsap.registerPlugin(CustomEase, CustomWiggle, Timeline);

const Consulting = () => {
  const swarm = (elements, x, y, duration, wiggles) => {
    elements = gsap.utils.toArray(elements);
    var tl = new Timeline(),
      i = elements.length,
      ease = "wiggle({type: random, wiggles: " + wiggles + "})";

    while (--i > -1) {
      tl.to(
        elements[i],
        { duration: duration, x: "+=" + x, repeat: -1, ease: ease },
        "delay"
      )
        .to(
          elements[i],
          { duration: duration, y: "+=" + y, repeat: -1, ease: ease },
          "delay"
        )
        .to(
          elements[i],
          { backgroundColor: "hsl(random(0, 360),80%,40%)" },
          "delay+=100"
        );
    }
    tl.time(duration);
    return tl;
  };

  useEffect(() => {
    gsap.to(".menu", { display: "flex" });
    swarm(".ball", window.innerWidth * 0.5, window.innerHeight * 0.3, 200, 15);
  }, []);
  let balls = Array(100).fill(1);
  return (
    <Fragment>
      <div className="consulting">
        <h1>Konsultacje IT </h1>

        {balls.map((ball) => (
          <div className="ball" key={uniqid()}></div>
        ))}

        <p>
          Doradzamy naszym klientom dobór najefektywniejszych rozwiązań IT
          biorąc pod uwagę profil działalności firmy, realne potrzeby, wymagania
          związane z oczekiwaną dostępnością rozwiązania i realiami budżetowymi.
          Współpracujemy ze światowymi liderami rozwiązań informatycznych,
          których technologie łączymy w systemy cechujące się produktywnością,
          ceną i niskimi kosztami użytkowania.
        </p>
      </div>
    </Fragment>
  );
};

export default Consulting;
