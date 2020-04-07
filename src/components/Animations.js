import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.88,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power2.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (nodeList) => {
  gsap.from([...nodeList], {
    duration: 0.8,
    y: 100,
    delay: 0.2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 64,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const fadeOut = (node) => {
  gsap.to(node, {
    x: -640,
    duration: 1,
    delay: 0.1,
    opacity: 1,
    ease: "power3.inOut",
  });
};

export const fadeIn = (node) => {
  gsap.to(node, {
    x: 0,
    duration: 1,
    delay: 0,
    opacity: 1,
    ease: "power3.inOut",
  });
};

// Hover on the link
export const handleHover = (e, offerImage, image) => {
  gsap.to(".info", { opacity: 0, duration: 0.2 });
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut",
  });
  gsap.to(offerImage, {
    background: `url(${image}) center center`,
    duration: 0.1,
    opacity: 1,
    ease: "power3.inOut",
  });
};

// Hover off the link
export const handleHoverExit = (e, offerImage) => {
  gsap.to(".info", { opacity: 1, duration: 0.2 });
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut",
  });
  gsap.to(offerImage, {
    duration: 0.88,
    opacity: 0,
    skewY: 0,
  });
};

//Animation Infoboard
export const infoboardAnim = (
  jlcVision,
  select = Date.now().toString().substr(-1)
) => {
  switch (select) {
    case "0":
      return gsap.from(jlcVision.chars, {
        duration: 0.8,
        opacity: 0,
        x: 0,
        yoyo: true,
        repeat: 1,
        ease: "back",
        stagger: 0.01,
      });
    case "1":
      return gsap.from(jlcVision.chars, {
        duration: 0.8,
        opacity: 1,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        yoyo: true,
        repeat: 1,
        stagger: 0.01,
      });
    case "2":
      return gsap.from(jlcVision.chars, {
        duration: 0.8,
        opacity: 1,
        scale: 0,
        y: -80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        yoyo: true,
        repeat: 1,
        stagger: 0.01,
      });
    case "3":
      return gsap.from(jlcVision.chars, {
        duration: 0.8,
        opacity: 1,
        scale: 0,
        y: -8,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "elastic",
        yoyo: true,
        repeat: 1,
        stagger: 0.01,
      });
    case "4":
      return gsap.from(jlcVision.chars, {
        duration: 0.8,
        opacity: 1,
        scale: 0,
        y: -8,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "bounce",
        yoyo: true,
        repeat: 1,
        stagger: 0.01,
      });
    case "5":
      return gsap.from(jlcVision.chars, {
        duration: 0.6,
        scale: 4,
        autoAlpha: 0,
        rotationX: -180,
        transformOrigin: "100% 50%",
        yoyo: true,
        repeat: 1,
        ease: "back.out",
        stagger: 0.02,
      });
    case "6":
      return gsap.from(jlcVision.words, {
        duration: 0.7,
        scale: 3,
        autoAlpha: 0,
        yoyo: true,
        repeat: 1,
        ease: "elastic",
        stagger: 0.2,
      });
    case "7":
      return gsap.from(jlcVision.words, {
        duration: 0.5,
        scale: 2.2,
        autoAlpha: 0,
        yoyo: true,
        repeat: 1,
        ease: "bounce",
        stagger: 0.5,
      });
    case "8":
      return gsap.from(
        jlcVision.chars,
        {
          duration: 0.2,
          autoAlpha: 0,
          scale: 4,
          force3D: true,
          yoyo: true,
          repeat: 1,
          stagger: 0.01,
        },
        0.5
      );

    case "9":
      return gsap.from(jlcVision.chars, {
        duration: 0.8,
        opacity: 0,
        x: 10,
        y: 1,
        scale: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "back",
        stagger: 0.01,
      });

    default:
      return gsap.from(
        jlcVision.chars,
        {
          duration: 0.8,
          opacity: 1,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: "back",
          repeat: 1,
          yoyo: true,
          stagger: 0.01,
        },
        "+=0"
      );
  }
};
