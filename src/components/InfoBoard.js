import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import { infoboardAnim } from "./Animations";
gsap.registerPlugin(ScrambleTextPlugin, SplitText);

const InfoBoard = () => {
  const [play, setPlay ] = useState({playing: "unknown"});
  const checkAnim = currentAnim => {
    console.log(currentAnim.isActive())
    if (!currentAnim.isActive()) {
      setPlay({ playing: false });
    }
  };

  useEffect(() => {
    console.log("object")
    let jlcVision = new SplitText("#vision", { type: "words,chars" });
    jlcVision.revert();
    jlcVision = new SplitText("#vision", { type: "words,chars" });
    let chars = jlcVision.chars;
    gsap.set("#vision", { perspective: 400 });
    let currentAnim = infoboardAnim(chars);
    const interval = setInterval(() => {
      checkAnim(currentAnim);
    }, 2000);
    return () => clearInterval(interval);
  }, [play]);

  return (
    <div className="home">
      <div className="history">
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
