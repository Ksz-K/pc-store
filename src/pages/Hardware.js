import React, { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import uniqid from "uniqid";
import { withRouter } from "react-router-dom";

gsap.registerPlugin(ScrollMagic, ScrollMagicPluginGsap);
ScrollMagicPluginGsap(ScrollMagic, gsap);
let controller = new ScrollMagic.Controller();

const Hardware = ({ history }) => {
  useEffect(() => {
    gsap.to(".canister", { height: "auto" });
    gsap.to(".menu", { display: "flex" });
    window.addEventListener("scroll", handleScroll(true), true);
  }, []);

  useEffect(() => {
    history.listen(() => {
      window.location.reload();
    });
  }, [history]);

  const contentOfPage = [
    {
      vendor: "intel",
      dRefs: useRef(null),
      offer: "Procesory // Dyski SSD // Płyty główne // Serwery",
      www:
        "https://www.intel.pl/content/www/pl/pl/products/docs/processors/core/10th-gen-processors.html",
      w3desc: "Strona producenta",
      img: "intel",
    },
    {
      vendor: "amd",
      dRefs: useRef(null),
      offer: "Procesory // Karty graficzne",
      www: "https://www.amd.com/pl/partner",
      w3desc: "Strona producenta",
      img: "amd",
    },
    {
      vendor: "nvidia",
      dRefs: useRef(null),
      offer: "Karty graficzne",
      www: "https://www.nvidia.com/pl-pl/",
      w3desc: "Strona producenta",
      img: "nvidia",
    },
    {
      vendor: "asus",
      dRefs: useRef(null),
      offer: "Płyty główne // Karty graficzne // Notebooki",
      www: "https://www.asus.com/pl/",
      w3desc: "Strona producenta",
      img: "asus",
    },
    {
      vendor: "gigabyte",
      dRefs: useRef(null),
      offer: "Płyty główne // Karty graficzne // Notebooki",
      www: "http://www.gigabyte.pl/",
      w3desc: "Strona producenta",
      img: "gigabyte",
    },
    {
      vendor: "msi",
      dRefs: useRef(null),
      offer: "Płyty główne // Karty graficzne // Notebooki",
      www: "https://pl.msi.com/",
      w3desc: "Strona producenta",
      img: "msi",
    },
    {
      vendor: "chieftec",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Akcesoria",
      www: "https://www.chieftec.eu/pl/",
      w3desc: "Strona producenta",
      img: "chieftec",
    },
    {
      vendor: "cooler master",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Wentylatory",
      www: "https://www.coolermaster.com/",
      w3desc: "Strona producenta",
      img: "coolerMaster",
    },
    {
      vendor: "bitfenix",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Akcesoria",
      www: "https://www.bitfenix.com/",
      w3desc: "Strona producenta",
      img: "bitfenix",
    },
    {
      vendor: "zalman",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Akcesoria",
      www: "https://www.zalman.com/eu/index.html?langGubun=en",
      w3desc: "Strona producenta",
      img: "zalman",
    },
    {
      vendor: "thermaltake",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Wentylatory",
      www: "https://pl.thermaltake.com/",
      w3desc: "Strona producenta",
      img: "thermal",
    },
    {
      vendor: "antec",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Wentylatory",
      www: "https://www.antec.com/",
      w3desc: "Strona producenta",
      img: "antec",
    },
    {
      vendor: "bequiet",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Wentylatory",
      www: "https://www.bequiet.com/pl",
      w3desc: "Strona producenta",
      img: "bequiet",
    },
    {
      vendor: "corsair",
      dRefs: useRef(null),
      offer: "Myszki // Klawiatury // Wentylatory",
      www: "https://www.bequiet.com/pl",
      w3desc: "Strona producenta",
      img: "corsair",
    },
    {
      vendor: "razer",
      dRefs: useRef(null),
      offer: "Akcesoria",
      www: "https://www.razer.com/hk-en",
      w3desc: "Strona producenta",
      img: "razer",
    },
    {
      vendor: "scythe",
      dRefs: useRef(null),
      offer: "Obudowy // Zasilacze // Wentylatory",
      www: "http://www.scythe-eu.com/en",
      w3desc: "Strona producenta",
      img: "scythe",
    },
    {
      vendor: "noctua",
      dRefs: useRef(null),
      offer: "Wentylatory",
      www: "https://noctua.at/en/products/fan",
      w3desc: "Strona producenta",
      img: "noctua",
    },
    {
      vendor: "patriot",
      dRefs: useRef(null),
      offer: "Pamięci // Dyski SSD // USB Flash",
      www: "https://info.patriotmemory.com/",
      w3desc: "Strona producenta",
      img: "patriot",
    },
    {
      vendor: "crucial",
      dRefs: useRef(null),
      offer: "Pamięci // Dyski SSD",
      www: "https://www.crucial.com/",
      w3desc: "Strona producenta",
      img: "crucial",
    },
    {
      vendor: "kingston",
      dRefs: useRef(null),
      offer: "Pamięci // Dyski SSD // USB Flash",
      www: "https://www.kingston.com/pl",
      w3desc: "Strona producenta",
      img: "kingston",
    },
    {
      vendor: "netgear",
      dRefs: useRef(null),
      offer: "Urządzenia sieciowe",
      www: "https://www.netgear.pl/default.aspx",
      w3desc: "Strona producenta",
      img: "netgear",
    },
    {
      vendor: "tp-link",
      dRefs: useRef(null),
      offer: "Urządzenia sieciowe",
      www: "https://www.tp-link.com/pl/",
      w3desc: "Strona producenta",
      img: "tplink",
    },
    {
      vendor: "eizo",
      dRefs: useRef(null),
      offer: "Monitory",
      www: "https://www.eizo.pl/",
      w3desc: "Strona producenta",
      img: "eizo",
    },
    {
      vendor: "wacom",
      dRefs: useRef(null),
      offer: "Pen computers // Pen Displays // Pen Tablets",
      www: "https://www.wacom.com/en-us",
      w3desc: "Strona producenta",
      img: "wacom",
    },
  ];

  const handleScroll = (go = false) => {
    if (go) {
      const vendorPresence = contentOfPage.map((vendor) => {
        return vendor.dRefs;
      });
      vendorPresence.forEach((animSection) => {
        let animateIn = gsap
          .timeline()
          .fromTo(
            animSection.children[0].children[1],
            2,
            {
              skewX: "25%",
              scaleX: 2,
              xPercent: 0,
              x: -150,
            },
            {
              skewX: 0,
              xPercent: 150,
              transformOrigin: "0% 100%",
              ease: "slow.easeIn",
              scale: 1,
            }
          )
          .fromTo(
            animSection.children[1],
            0.77,
            { scaleY: 0, transformOrigin: "bottom left" },
            { scaleY: 1, ease: "Bounce.easeOut" },
            "-=1.23"
          )
          .fromTo(
            animSection.children[1].children[0],
            0.44,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, ease: "Bounce.easeOut" },
            "-=0.45"
          )
          .fromTo(
            animSection.children[1].children[2],
            0.44,
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              ease: "Power4.easeOut",
            }
          )
          .fromTo(
            animSection.children[1].children[1],
            0.44,
            {
              autoAlpha: 0,
              y: 30,
            },
            {
              autoAlpha: 1,
              y: 0,
              ease: "Power4.easeOut",
            }
          );

        let anim1 = new ScrollMagic.Scene({
          triggerElement: animSection,
          triggerHook: 0.88,
        })
          .setTween(animateIn)
          .addTo(controller);
      });
    }
  };

  return (
    <Fragment>
      <div id="vendors" className="d-grid h70">
        <h1> W naszej ofercie sprzętowej </h1>
        <h4>odnajdziemy czołowych dostawców</h4>
        <h4>Świata IT</h4>
      </div>
      <div>
        {contentOfPage.map((vendor, index) => (
          <section className="anim" key={uniqid()}>
            <div
              ref={(el) => (vendor[Object.keys(vendor)[1]] = el)}
              className={
                (index + 1) % 2 === 0
                  ? "grid-12 project project-right"
                  : "grid-12 project project-left"
              }
            >
              <div className="box py-4">
                <img src={`./img/${vendor.img}.jpg`} alt={vendor.name} />
                <div className="overlay"></div>
              </div>
              <div className="project-info">
                <p className="small-title">{vendor.offer}</p>
                <h4 className="vendor">{vendor.vendor}</h4>
                <a
                  className="project-link"
                  href={vendor.www}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {vendor.w3desc}
                </a>
              </div>
            </div>
          </section>
        ))}
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          type="button"
          className="btn btn-primary btn-lg mt-1  btn-block"
        >
          Powrót do menu
        </button>
      </div>
    </Fragment>
  );
};

export default withRouter(Hardware);
