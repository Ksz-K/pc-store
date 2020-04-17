import React, { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import uniqid from "uniqid";

gsap.registerPlugin(ScrollMagic, ScrollMagicPluginGsap);
//ScrollMagicPluginGsap(ScrollMagic, gsap);

let controller2 = new ScrollMagic.Controller();

const POSoffer = () => {
  useEffect(() => {
    handleMove(true);
  });

  const contentOffer = [
    {
      vendor: "Kasy fiskalne",
      dRefs: useRef(null),
      offer: "Małe, średnie, systemowe.",
      www: "https://www.posnet.com.pl/produkty/category/1/kasy-fiskalne",
      w3desc: "Posnet - kasy fiskalne",
      img: "pos.jpg",
    },
    {
      vendor: "Drukarki fiskalne",
      dRefs: useRef(null),
      offer: "Sklepowe, biletowe, apteczne",
      www: "https://www.posnet.com.pl/produkty/category/2/drukarki-fiskalne",
      w3desc: "Posnet - drukarki fiskalne",
      img: "printer.jpg",
    },
    {
      vendor: "Fiskalne terminale płatnicze (POSPAY)",
      dRefs: useRef(null),
      offer:
        "Pospay to urządzenia łączące w sobie funkcje kasy, drukarki fiskalnej oraz terminala płatniczego.",
      www:
        "https://www.posnet.com.pl/produkty/category/51/fiskalne-terminale-platnicze-pospay",
      w3desc: "Posnet - POSPAY informacje",
      img: "terminal.png",
    },
    {
      vendor: "Ekrany dotykowe",
      dRefs: useRef(null),
      offer: "Wolnostojące, do zabudowy",
      www: "https://www.posnet.com.pl/produkty/category/4/ekrany-dotykowe",
      w3desc: "Ekrany dotykowe - informacje",
      img: "touch-screen.jpg",
    },
    {
      vendor: "Kasy samoobsługowe",
      dRefs: useRef(null),
      offer: "Uniwersalne, stacjonarne",
      www: "https://www.posnet.com.pl/produkty/category/53/kasy-samoobslugowe",
      w3desc: "Kasy - informacje",
      img: "pos-smart.png",
    },
    {
      vendor: "Skanery kodów kreskowych",
      dRefs: useRef(null),
      offer: "Płyty główne // Karty graficzne // Notebooki",
      www: "https://www.posnet.com.pl/produkty/category/24/kody-kreskowe/",
      w3desc: "Dodatkowe informacje",
      img: "bar-reader.jpg",
    },
    {
      vendor: "Wagi",
      dRefs: useRef(null),
      offer: "Kontrolne, platformowe, pomostowe",
      www: "https://www.posnet.com.pl/produkty/category/25/wagi",
      w3desc: "Wagi - strona Posnet",
      img: "weight.jpg",
    },
    {
      vendor: "Akcesoria",
      dRefs: useRef(null),
      offer: "Czytniki, szuflady, klawiatury",
      www: "https://www.posnet.com.pl/produkty/category/26/inne",
      w3desc: "Dodatkowe informacje",
      img: "accessory.jpg",
    },
  ];

  const handleMove = (go = false) => {
    if (go) {
      const animPOS = contentOffer.map((vendor) => {
        return vendor.dRefs;
      });
      animPOS.forEach((animPOSpic) => {
        let animatePOS = gsap
          .timeline()
          .fromTo(
            animPOSpic.children[0].children[1],
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
            animPOSpic.children[1],
            0.77,
            { scaleY: 0, transformOrigin: "bottom left" },
            { scaleY: 1, ease: "Bounce.easeOut" },
            "-=1.23"
          )
          .fromTo(
            animPOSpic.children[1].children[0],
            0.44,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, ease: "Bounce.easeOut" },
            "-=0.45"
          )
          .fromTo(
            animPOSpic.children[1].children[2],
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
            animPOSpic.children[1].children[1],
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

        let anim2 = new ScrollMagic.Scene({
          triggerElement: animPOSpic,
          triggerHook: 0.77,
        })
          .setTween(animatePOS)
          .addTo(controller2);
      });
    }
  };

  return (
    <Fragment>
      <div id="vendors" className="d-grid h71">
        <h1>W naszej ofercie mamy urządzenia fiskalne</h1>
        <h4>wiodącej polskiej firmy</h4>
        <h4>POSNET</h4>
      </div>
      <div>
        {contentOffer.map((vendor, index) => (
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
                <img src={`./img/${vendor.img}`} alt={vendor.name} />
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

export default POSoffer;
