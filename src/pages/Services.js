import React, { Fragment, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import uniqid from "uniqid";
import { Icon } from "react-icons-kit";
import { drive } from "react-icons-kit/icomoon/drive";
import { database } from "react-icons-kit/icomoon/database";
import { ticket } from "react-icons-kit/icomoon/ticket";
import { stack } from "react-icons-kit/icomoon/stack";
import { wrench } from "react-icons-kit/icomoon/wrench";
import { power } from "react-icons-kit/icomoon/power";
import { hammer2 } from "react-icons-kit/icomoon/hammer2";
import { forward3 } from "react-icons-kit/icomoon/forward3";
import { terminal } from "react-icons-kit/icomoon/terminal";
import { shield } from "react-icons-kit/icomoon/shield";

gsap.registerPlugin(MotionPathPlugin);

const Services = () => {
  useEffect(() => {
    gsap.to(".menu", { display: "flex" });
    gsap.set(".dot", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        ease: "Power4.easeInOut",
      },
    });
    tl.to(".dot", {
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
      },
      stagger: {
        each: -0.0009,
      },
      duration: 2,
      repeat: 0,
      immediateRender: true,
      ease: "power2.in",
    })
      .fromTo(
        "#path",
        {
          drawSVG: "0%",
        },
        {
          drawSVG: "100% 50%",
          immediateRender: true,
          duration: 2,
          ease: "power2.in",
        },
        0
      )
      .to("#path", {
        drawSVG: "100% 100%",
        duration: 1,
      })
      .to(".services", { opacity: 1, duration: 2 })
      .to(".vendorsLogos", { opacity: 1, duration: 3 })
      .to(".vendorsLogos", {
        marginLeft: "44%",
        duration: 3,
        ease: "Bounce.easeInOut",
      })
      .to(".vendorsLogos", {
        marginLeft: 0,
        duration: 3,
        ease: "Bounce.easeInOut",
      })
      .to(".vendorsLogos", {
        x: "-44%",
        duration: 3,
        ease: "Bounce.easeInOut",
      })
      .to(".vendorsLogos", {
        x: 0,
        duration: 3,
        ease: "Bounce.easeInOut",
      });
  }, []);

  return (
    <Fragment>
      <div className="service">
        <div className="services">
          <h1>Usługi serwisowe:</h1>
          <ul>
            <li>
              {" "}
              <Icon icon={stack} size={20} />
              &nbsp; Instalacja systemu operacyjnego
            </li>
            <li>
              {" "}
              <Icon icon={terminal} size={20} />
              &nbsp; Instalacja aplikacji dedykowanych
            </li>
            <li>
              {" "}
              <Icon icon={database} size={20} />
              &nbsp; Instalacja aplikacji standardowych
            </li>
            <li>
              {" "}
              <Icon icon={shield} size={20} />
              &nbsp; Czyszczenie i konserwacja
            </li>
            <li>
              {" "}
              <Icon icon={drive} size={20} />
              &nbsp; Formatowanie dysków
            </li>
            <li>
              {" "}
              <Icon icon={forward3} size={20} />
              &nbsp; Optymalizaja systemu
            </li>
            <li>
              {" "}
              <Icon icon={wrench} size={20} />
              &nbsp; Naprawy mechaniczne i po zalaniu
            </li>
            <li>
              {" "}
              <Icon icon={power} size={20} />
              &nbsp; Wymiana zasilaczy, gniazd i portów
            </li>
            <li>
              {" "}
              <Icon icon={hammer2} size={20} />
              &nbsp; Wymiana matrycy
            </li>
            <li>
              {" "}
              <Icon icon={ticket} size={20} />
              &nbsp; Inne - realizujące przywrócenie działania
            </li>
          </ul>
        </div>
        <div className="vendors">
          <img className="vendorsLogos" src="/img/vendors.png" alt="logos" />
        </div>
        <svg className="movingPoint" viewBox="0 0 1028 381">
          <defs>
            <filter id="glow">
              <fegaussianblur
                className="blur"
                result="coloredBlur"
                stdDeviation="8"
              ></fegaussianblur>
              <femerge>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="SourceGraphic"></femergenode>
              </femerge>
            </filter>
          </defs>
          <path
            id="path"
            d="M1 248C29 322.667 114.2 409.2 231 158C377 -156 339 264 479 280C619 296 707 116 729 36C751 -44 875 4.00006 913 268C943.4 479.2 1001.67 342.667 1027 248"
            style={{
              fillOpacity: 0,
              strokeWidth: 6,
              stroke: "red",
              filter: "url(#glow)",
            }}
          />
        </svg>
        {Array(200)
          .fill(1)
          .map((dots) => (
            <div key={uniqid()} className="dot"></div>
          ))}
      </div>
    </Fragment>
  );
};

export default Services;
