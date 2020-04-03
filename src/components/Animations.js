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
      amount: 0.1
    }
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
  gsap.from(node, {
    y: 64,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut"
  });
};

export const fadeOut = node => {
  gsap.to(node, {
    x: -640,
    duration: 1,
    delay: 0.1,
    opacity: 1,
    ease: "power3.inOut"
  });
};

export const fadeIn = node => {
  gsap.to(node, {
    x: 0,
    duration: 1,
    delay: 0,
    opacity: 1,
    ease: "power3.inOut"
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut"
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut"
  });
};

export const handleImage = (image, target) => {
  gsap.to(target, {
    background: `url(${image}) center center`,
    duration: 0.1,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.88,
    skewY: 2,
    transformOrigin: "right top"
  });
};

// Removes the  image once you hover off
export const handleImageReturn = target => {
  // gsap.to(target, {
  //   duration: 0.8,
  //   skewY: 0
  // });
  gsap.to(target, {
    duration: 0.88,
    opacity: 0,
    skewY: 0
  });
};

//Animation Infoboard 1
export const infoboardAnim = (
  chars,
  select = Date.now()
    .toString()
    .substr(-1)
) => {
  switch (select) {
    case "1":
      return gsap.from(chars, {
        duration: 0.8,
        opacity: 0,
        x: 0,
        yoyo: true,
        ease: "back",
        stagger: 0.01     
      })
    case "2":
      return gsap.from(chars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        yoyo: true,
        stagger: 0.01
      });

    default:
      return gsap.from(chars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        repeat: 1,
        yoyo: true,
        stagger: 0.01
      },"+=0");
  }
};
