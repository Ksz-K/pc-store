import React, { useRef, useEffect, useState } from "react";
import { slideInfo } from "../assets/data";
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { chevronRight } from "react-icons-kit/fa/chevronRight";

import gsap from "gsap";

import "reset-css";

const App = () => {
  let imageList = useRef(null);
  let sliderList = useRef(null);
  let autoClick = useRef(null);
  let arr;
  let imageWidth;

  const [state, setState] = useState([true, false, false]);

  useEffect(() => {
    arr = Array.from(imageList.children);
    imageWidth = imageList.offsetWidth;
    const interval = setInterval(() => {
      simulateClick(autoClick);
    }, 2000);
    return () => clearInterval(interval);
  }, [state]);

  const simulateClick = e => {
    if (e) {
      e.click();
    }
  };

  const slideIt = index => {
    gsap.to(".slide-image ul li", 1, {
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
    gsap.to(sliderList.children[index], duration, {
      opacity: 0,
      ease: "Power3.easeInOut"
    });
  };
  const fadeIn = (index, duration) => {
    gsap.to(sliderList.children[index], duration, {
      opacity: 1,
      ease: "Power3.easeInOut",
      delay: 0.44
    });
  };

  const nextSlide = () => {
    let oldActive = arr
      .map(elLi => elLi.classList.value === "active")
      .findIndex(visible => visible === true);
    let newValue = state;
    newValue[oldActive] = false;
    let newActive = oldActive === arr.length * 1 - 1 ? 0 : oldActive + 1;
    newValue[newActive] = true;
    setState([...newValue]);

    slideIt(newActive);
    scale(imageList.children[newActive], 1, 1.5);
    fadeOut(oldActive, 1);
    fadeIn(newActive, 1);
  };

  const prevSlide = () => {
    let oldActive = arr
      .map(elLi => elLi.classList.value === "active")
      .findIndex(visible => visible === true);
    let newValue = state;
    newValue[oldActive] = false;
    let newActive = oldActive === 0 ? arr.length * 1 - 1 : oldActive - 1;
    console.log(newActive);
    newValue[newActive] = true;
    setState([...newValue]);

    slideIt(newActive);
    scale(imageList.children[newActive], 1, 1.6);
    fadeOut(oldActive, 1);
    fadeIn(newActive, 1);
  };

  return (
    <div className="slider-section">
      <div className="slider-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <Icon className="icon" icon={chevronLeft} size={37} />
          </span>
        </div>
        <div className="inner">
          <div className="slide-image">
            <ul ref={el => (imageList = el)}>
              {slideInfo.map((person, index) => (
                <li key={person.id} className={state[index] ? "active" : ""}>
                  <img src={person.image} alt={person.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className="slide-desc">
            <ul ref={el => (sliderList = el)}>
              {slideInfo.map(personInfo => (
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

        <div
          ref={el => (autoClick = el)}
          onClick={nextSlide}
          className="arrows right"
        >
          <span>
            <Icon className="icon" icon={chevronRight} size={37} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
