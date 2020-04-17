import React, { Fragment, useEffect } from "react";
import { gsap } from "gsap";

const Networking = () => {
  useEffect(() => {
    gsap.to(".menu", { display: "flex" });

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        ease: "Power4.easeInOut",
      },
    });
    tl.to(".appear", {
      opacity: 1,
      x: "25px",
      y: "3px",
      stagger: 1,
      duration: 1,
    });
  }, []);

  return (
    <Fragment>
      <div className="network">
        <div className="net-services">
          <h1>Sieci informatyczne</h1>
          <ul>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Projektowanie sieci teleinformatycznych
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Budowa sieci teleinformatycznych
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Dostawa pasywnych elementów sieci
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Dostawa aktywnych elementów sieci
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Konfiguracja sieci komputerowych
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Nadzór nad sieciami komputerowymi
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Administracja sieciami komputerowymi
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Modernizacja sieci komputerowych
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Rewitalizacja infrastruktury sprzętowej sieci
            </li>
            <li className="appear">
              {" "}
              {/* <Icon icon={stack} size={20} /> */}
              &nbsp; Stałe umowy serwisowe i utrzymaniowe
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Networking;
