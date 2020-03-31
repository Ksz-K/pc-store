import React, { useRef, useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { chevronRight } from "react-icons-kit/fa/chevronRight";

import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("../assets/abc.png")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    id: 2,
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("../assets/abc.png")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    id: 3,
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("../assets/abc.png")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

function App() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  let autoClick = useRef(null);
  let arr;
  let oldActive;
  let imageWidth;
  let newValue;
  let newActive;

  const [state, setState] = useState([true, false, false]);

  useEffect(() => {
    arr = Array.from(imageList.children);
    imageWidth = imageList.offsetWidth;
    console.log(imageWidth);
    const interval = setInterval(() => {
      simulateClick(autoClick);
    }, 200000);
    return () => clearInterval(interval);
  }, [state]);

  const simulateClick = e => {
    if (e) {
      e.click();
    }
  };

  const slideIt = index => {
    gsap.to(".t-image ul li", 1, {
      x: function() {
        return index * -1 * imageWidth;
      },
      ease: "Power3.easeOut"
    });
  };

  const scale = (index, duration, ratio = 1) => {
    gsap.from(index, duration, {
      scale: ratio,
      ease: "Power3.easeOut"
    });
  };

  const fadeOut = (index, duration) => {
    gsap.to(testimonialList.children[index], duration, {
      opacity: 0,
      ease: "Power3.easeInOut"
    });
  };
  const fadeIn = (index, duration) => {
    gsap.to(testimonialList.children[index], duration, {
      opacity: 1,
      ease: "Power3.easeInOut",
      delay: 0.44
    });
  };

  const nextSlide = () => {
    if (arr !== undefined) {
      oldActive = arr
        .map(elLi => elLi.classList.value === "active")
        .findIndex(visible => visible === true);
      newValue = state;
      newValue[oldActive] = false;
      newActive = oldActive === arr.length * 1 - 1 ? 0 : oldActive + 1;
      newValue[newActive] = true;
    } else {
      oldActive = state.findIndex(visible => visible === true);
      newValue = state;
      newValue[oldActive] = false;
      newActive = oldActive + 1;
      newValue[newActive] = true;
    }

    setState([...newValue]);

    slideIt(newActive);
    scale(imageList.children[newActive], 1, 1.5);
    fadeOut(oldActive, 1);
    fadeIn(newActive, 1);
  };

  const prevSlide = () => {
    if (arr !== undefined) {
      oldActive = arr
        .map(elLi => elLi.classList.value === "active")
        .findIndex(visible => visible === true);
      newValue = state;
      newValue[oldActive] = false;
      newActive = oldActive === 0 ? arr.length * 1 - 1 : oldActive - 1;
      console.log(newActive);
      newValue[newActive] = true;
    } else {
      oldActive = state.findIndex(visible => visible === true);
      newValue = state;
      newValue[oldActive] = false;
      newActive = oldActive + 1;
      newValue[newActive] = true;
    }

    setState([...newValue]);

    slideIt(newActive);
    scale(imageList.children[newActive], 1, 1.6);
    fadeOut(oldActive, 1);
    fadeIn(newActive, 1);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <Icon className="icon" icon={chevronLeft} size={37} />
          </span>
        </div>
        <div
          ref={el => (autoClick = el)}
          onClick={nextSlide}
          className="arrows right"
        >
          <span>
            <Icon className="icon" icon={chevronRight} size={37} />
          </span>
        </div>
        <div className="inner" style={{display:"none"}}>
          <div className="t-image">
            <ul ref={el => (imageList = el)}>
              {testimonials.map((person, index) => (
                <li key={person.id} className={state[index] ? "active" : ""}>
                  <img src={person.image} alt={person.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className="t-content">
            <ul ref={el => (testimonialList = el)}>
              {testimonials.map(personInfo => (
                <li key={personInfo.id}>
                  <div className="content-inner">
                    <p className="quote">{personInfo.quote}</p>
                    <h3 className="name">{personInfo.name}</h3>
                    <h4 className="title">{personInfo.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
