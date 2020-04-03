import React from "react";
import gsap from "gsap";

import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

var tl = gsap.timeline(),
  mySplitText = new SplitText("#vision", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#vision", { perspective: 400 });

tl.from(
  chars,
  {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01
  },
  "+=0"
);

const InfoBoard = () => {
  return (
    <div className="home">
      <div className="history">
        <div id="vision" className="info-heading">
          <strong>JLC First</strong> to przedsiębiorstwo założone w drugiej
          połowie lat 80. przez Jacka Lipińskiego.
          <br />
          <br /> W czasach gdy debiutował procesor Intel i386DX, zbudowany w
          procesie technologicznym 1,5 &micro;m (1500 nm) firma JLC First
          kreowała podwaliny polskiego rynku IT. Dziś po upływie ponad ponad 30
          lat nadal aktywnie działa w polskie branży IT, oferując systemy
          bazujące na dostępnych nowinkach technologicznych. <br />
          <br />
          Rozwiązania klasycznych stacji roboczych, serwerów, desktopów i
          laptopów dla najbardziej wymagających graczy, drukarki, akcesoria,
          serwis, wdrożenia, usługi konsultingowe i szeroki wachlarz
          oprogramowani standardowego i&nbsp;dedykowanego - to wszystko
          znajdziecie Państwo w ofercie JLC First.
          <br />
          <br />
          Dziś budujemy systemy w oparciu o procesory wyprodukowane w
          technologii 9nm - to co pozostaje bez zmian to: jakość, rzetelność,
          konkurencyjna cena.
          <br />
          <br /> Nie zmieniła się też istota prowadzenia przedsiębiorstwa
          JLC&nbsp;First - troska o Klienta.
        </div>
      </div>
    </div>
  );
};

export default InfoBoard;
