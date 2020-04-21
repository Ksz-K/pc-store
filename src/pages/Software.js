import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(Timeline);

const Consumables = () => {
  function createHover(cardWrapper) {
    let tlsw = new Timeline({ paused: true, reversed: true });
    tlsw
      .to(cardWrapper, {
        duration: 1.2,
        rotationX: -235,
        ease: "Back.easeOut",
      })
      .to(cardWrapper, {
        duration: 0.88,
        rotationX: 0,
        ease: "Back.easeOut",
      });
    tlsw.play();
  }

  useEffect(() => {
    gsap.to(".menu", { display: "flex" });
    gsap.set(".cardWrapper", { perspective: 800 });
    gsap.set(".card", { transformStyle: "preserve-3d" });
    gsap.set(".back", { rotationY: -180 });
    gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });
  }, []);

  return (
    <div className="sw">
      <div className="background d-none d-md-block">
        <h1 className="lead text-light mt-3 pt-3 text-center">
          Zajmujemy się instalacją i konfiguracją oprogramowania niezbędnego do
          prowadzenia każdego typu działalności gospodarczej.{" "}
        </h1>
        <h1 className="lead text-light mt-3 pb-3 text-center">
          Od wielu lat jesteśmy partnerami handlowymi takich firm jak:
        </h1>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseLeave={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>Comarch</h1>
            <p>
              Comarch ERP Optima obecne jest na polskim rynku od 1998 roku.
              Działa pod systemem operacyjnym Windows i służy do pomocy w
              zarządzaniu i prowadzeniu księgowości dla mikro-, małych i
              średnich przedsiębiorstw. Jest to najpopularniejszy system w tym
              segmencie rynku.
            </p>
          </div>
          <div className="cardFace back">
            <img src="./img/erpoptima.png" alt="ERPOptima" />
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseLeave={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>RAKS</h1>
            <p>
              RAKS jest z sukcesem wykorzystywany przez firmy handlowe, usługowe
              i produkcyjne. Doskonale sprawdza się zarówno w małych, jak i
              średnich przedsiębiorstwach. Główne zalety programu to intuicyjna
              obsługa oraz łatwe dopasowanie do indywidualnych potrzeb
              Użytkowników.
            </p>
          </div>
          <div className="cardFace back">
            <img src="./img/raks.png" alt="RAKS" />
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <div
          className="card"
          onMouseLeave={(e) => createHover(e.currentTarget)}
        >
          <div className="cardFace front">
            <h1>Asseco Business Solutions</h1>
            <p>
              WF-Mag, WF-Fakturka, Kaper i FaKir to tylko niektóre rozwiązania z
              szerokiej oferty ABS, które mamy przeyjemnośćoferować i wdrażać
              dla naszych klientów.{" "}
            </p>
          </div>
          <div className="cardFace back">
            <img src="./img/abs.png" alt="Asseco" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumables;
