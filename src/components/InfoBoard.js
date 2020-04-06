import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import { Timeline } from "gsap/gsap-core";
import { infoboardAnim } from "./Animations";

gsap.registerPlugin(ScrambleTextPlugin, SplitText, Timeline);

const InfoBoard = () => {
  let visionPanel = useRef(null);

  const [play, setPlay] = useState({ playing: "unknown" });
  const checkAnim = (currentAnim, jlcVision) => {
    if (!currentAnim.isActive()) {
      jlcVision.revert();
      setPlay({ playing: "newAnimStart" });
    }
  };

  useEffect(() => {
    let jlcVision = new SplitText("#vision", {
      type: "words,chars",
    });

    gsap.set("#vision", { perspective: 400 });
    let currentAnim = infoboardAnim(jlcVision);
    let tl = new Timeline();
    tl.add(currentAnim);
    visionPanel.classList.value !== "history start" && tl.pause();
    const interval = setInterval(() => {
      checkAnim(currentAnim, jlcVision);
    }, 2345);
    return () => clearInterval(interval);
  }, [play]);

  return (
    <div className="home">
      <div
        id="visionPanel"
        ref={(el) => (visionPanel = el)}
        className="history"
      >
        <div id="vision" className="info-heading">
          <strong>JLC First</strong> to przedsiębiorstwo założone w drugiej
          połowie lat 80. przez Jacka Lipińskiego.
          <br /> W czasach gdy debiutował procesor Intel i386DX, zbudowany w
          procesie technologicznym 1,5 &micro;m (1500 nm) firma JLC First
          kreowała podwaliny polskiego rynku IT. Dziś po upływie ponad 30 lat
          nadal aktywnie działa w polskiej branży IT, oferując systemy bazujące
          na dostępnych nowinkach technologicznych. <br />
          Rozwiązania klasycznych stacji roboczych, serwerów, desktopów i
          laptopów dla najbardziej wymagających graczy, drukarki, akcesoria,
          serwis, wdrożenia, usługi konsultingowe i szeroki wachlarz
          oprogramowani standardowego i&nbsp;dedykowanego - to wszystko
          znajdziecie Państwo w ofercie JLC First.
          <br />
          Dziś budujemy systemy w oparciu o procesory wyprodukowane w
          technologii 9nm - to co pozostaje bez zmian to: jakość, rzetelność,
          konkurencyjna cena.
          <br /> Nie zmieniła się też istota prowadzenia przedsiębiorstwa
          JLC&nbsp;First - troska o Klienta.
        </div>
      </div>
    </div>
  );
};

export default InfoBoard;
