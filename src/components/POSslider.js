import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import uniqid from "uniqid";
import $ from "jquery";
import "bootstrap/js/src/carousel.js";
import "bootstrap/dist/css/bootstrap.min.css";

gsap.registerPlugin(Timeline);

const POSslider = () => {
  const messages = [
    {
      head: "Kasy fiskalne ONLINE - co to takiego?",
      p:
        "KASY FISKALNE ONLINE TO NOWA KATEGORIA URZĄDZEŃ FISKALNYCH, KTÓRE KOMUNIKUJĄ SIĘ Z CENTRALNYM REJESTREM KAS PROWADZONYM PRZEZ SZEFA KRAJOWEJ ADMINISTRACJI SKARBOWEJ.",
    },
    {
      head: "KASY FISKALNE ONLINE TO NOWA KATEGORIA URZĄDZEŃ FISKALNYCH ",
      p:
        "Centralny Rejestr Kas (inaczej Repozytorium) gromadzi szereg danych m. in.: raporty dobowe, paragony fiskalne, dokumenty niefiskalne, zdarzenia a także informacje o dokonanych przeglądach okresowych.",
    },
    {
      head: "KASY FISKALNE ONLINE TO NOWA KATEGORIA URZĄDZEŃ FISKALNYCH ",
      p:
        "Oprócz tego Repozytorium jest odpowiedzialne za nadawanie numeru ewidencyjnego kasie podczas fiskalizacji. Kasy ONLINE łączą się z Repozytorium co dwie godziny. Jest to domyślny czas, bowiem Repozytorium może zmieniać ten harmonogram połączeń. Co więcej, odbywa się to bez wiedzy użytkownika.",
    },
    {
      head: "KASY FISKALNE ONLINE TO NOWA KATEGORIA URZĄDZEŃ FISKALNYCH ",
      p:
        "Użytkownik kasy ONLINE musi zapewnić dostęp do internetu, czyli odpowiednią infrastrukturę, dzięki której kasa może łączyć się z Repozytorium.",
    },
    {
      head: "Ważne daty",
      p:
        "Według Ustawy o zmianie ustawy o podatku od towarów i usług oraz ustawy - Prawo o miarach, do obowiązku prowadzenia ewidencji za pośrednictwem kas online podatnicy są zobowiązani w następujących terminach.",
    },
    {
      head: "OD 1 STYCZNIA 2020 ROKU",
      p:
        "Świadczenia usług naprawy pojazdów silnikowych oraz motorowerów, w tym naprawy opon, ich zakładania, bieżnikowania, regenerowania, oraz w zakresie wymiany opon i kół dla pojazdów silnikowych i motorowerów, sprzedaży benzyny silnikowej, oleju napędowego, gazu do napędów silników spalinowych",
    },
    {
      head: "OD 1 STYCZNIA 2020 ROKU",
      p:
        "Sprzedaży benzyny silnikowej, oleju napędowego, gazu przeznaczonego do napędu silników spalinowych.",
    },
    {
      head: "OD 1 LIPCA 2020 ROKU",
      p:
        "Świadczenia usług zw. z wyżywieniem wyłącznie świadczonych przez stacjonarne placówki gastronomiczne, w tym również sezonowo oraz w zakresie krótkotrwałego zakwaterowania",
    },
    {
      head: "OD 1 LIPCA 2020 ROKU",
      p:
        "Sprzedaży węgla, brykietu i podobnych paliw stałych wytwarzanych z węgla, węgla brunatnego, koksu i półkoksu przeznaczonych do celów opałowych.",
    },
    {
      head: "OD 1 STYCZNIA 2021 ROKU",
      p:
        "Świadczenia usług fryzjerskich, kosmetycznych i kosmetologicznych, budowlanych, w zakresie opieki medycznej świadczonej przez lekarzy i dentystów, prawniczych, związanych z działalnością obiektów służących poprawie kondycji fizycznej wyłącznie w zakresie wstępu.",
    },
    {
      head:
        "TERMIN WYGAŚNIĘCIA HOMOLOGACJI DLA KAS Z KOPIĄ PAPIEROWĄ TO 31 SIERPNIA 2019 R.",
      p:
        "Po tej dacie można w dalszym ciągu użytkować taką kasę, ale nie będzie można jej fiskalizować. Od 1 maja obowiązuje zakaz wymian pamięci fiskalnych w kasach z kopią papierową.",
    },
    {
      head:
        "KASY REJESTRUJĄCE Z ELEKTRONICZNYM ZAPISEM KOPII BĘDĄ WYDAWANE DO DNIA 31 GRUDNIA 2022 R",
      p:
        "Po tej dacie można w dalszym ciągu użytkować taką kasę, ale nie będzie można jej fiskalizować.",
    },
    {
      head:
        "ZAPEWNIENIE TERMINOWEGO POŁĄCZENIA I PRZEKAZU DANYCH DO REPOZYTORIUM KAS",
      p:
        "Z powodu np. braku dostępu do internetu w miejscu prowadzenia działalności gospodarczej podatnik może uzyskać zgodę Urzędu Skarbowego na łączenie się z CRK w innych, ustalonych z US, terminach.",
    },
    {
      head:
        "PODDAWANIE PRZEGLĄDOM TECHNICZNYM POSIADANYCH URZĄDZEŃ FISKALNYCH CO 24 MIESIĄCE",
      p: "W ciągu 3 dni od zgłoszenia serwisant dokonuje przeglądu",
    },
    {
      head:
        "PODDAWANIE PRZEGLĄDOM TECHNICZNYM POSIADANYCH URZĄDZEŃ FISKALNYCH CO 24 MIESIĄCE",
      p:
        "W okresie zawieszenia działalności nie wykonuje się przeglądu technicznego, ale należy go dokonać przed ponownym rozpoczęciem prowadzenia ewidencji sprzedaży",
    },
    {
      head:
        "PODDAWANIE PRZEGLĄDOM TECHNICZNYM POSIADANYCH URZĄDZEŃ FISKALNYCH CO 24 MIESIĄCE",
      p:
        "Kara za brak przeglądu technicznego – 300 zł, wpłaty należy dokonać na konto właściwego US w ciągu 14 dni od otrzymania decyzji",
    },
    {
      head:
        "OŚWIADCZENIA PRACOWNIKÓW O ZAPOZNANIU SIĘ Z ZASADAMI PROWADZENIA EWIDENCJI",
      p: "Nowi pracownicy przed rozpoczęciem ewidencji sprzedaży na kasie",
    },
    {
      head:
        "OŚWIADCZENIA PRACOWNIKÓW O ZAPOZNANIU SIĘ Z ZASADAMI PROWADZENIA EWIDENCJI",
      p: "Do 31 maja 2019 r. pracownicy zatrudnieni przed 1 maja 2019 r.",
    },
    {
      head: "ODCZYT PAMIĘCI FISKALNEJ",
      p: "Podatnik musi zachować dane z pamięci chronionej",
    },
    {
      head: "ODCZYT PAMIĘCI FISKALNEJ",
      p:
        "Odczyt i protokół z odczytu wykonywany jest w serwisie (bez udziału US)",
    },
    {
      head: "ODCZYT PAMIĘCI FISKALNEJ",
      p:
        "Urządzenie ONLINE kiedy przechodzi w stan 'tylko do odczytu' musi być podłączone do internetu w celu przekazania danych do CRK",
    },
    {
      head: "ODCZYT PAMIĘCI FISKALNEJ",
      p:
        "Podatnik jest zobowiązany do dostarczenia protokołu odczytu do US w ciągu 5 dni od jego przeprowadzenia.",
    },
  ];

  useEffect(() => {
    gsap.set("#foreground", { alpha: 1 }, 0);
    gsap.from(".path", 1, { x: 50, scale: 1.2 }, 0);
    gsap.from(".small-path", 1, { scale: 2.4, x: 150 }, 0);
    // Staggered menu items
    gsap.set(
      ".icon-line",
      { autoAlpha: 0, width: "0%", ease: "Sine.easeInOut" },
      ".1"
    );
    gsap.to(
      ".icon-line",
      2,
      { autoAlpha: 1, width: "35%", ease: "Sine.easeInOut" },
      ".2"
    );

    gsap.from(".fadeText", { delay: 2, opacity: 0, x: -50, duration: 1 }, ".3");
    gsap.to(
      "#foreground",
      1,
      {
        delay: 5,
        x: "100%",
        onComplete: function () {
          $("#tlslicarousellJLC").carousel("pause");
          gsap.to(".fadeText", 0.7, {
            scale: 1,
            ease: "Cubic.easeOut",
          });
          $("#tlslicarousellJLC").carousel("cycle");

          $("#tlslicarousellJLC").one("slid.bs.carousel", function () {
            gsap.set(
              ".icon-line",
              { autoAlpha: 0, width: "0%", ease: "Sine.easeInOut" },
              ".1"
            );
            gsap.to(
              ".icon-line",
              2,
              { autoAlpha: 1, width: "35%", ease: "Sine.easeInOut" },
              ".2"
            );
          });

          $("#tlslicarousellJLC").on("slide.bs.carousel", function (e) {
            gsap.fromTo(
              "#foreground",
              2,
              { x: "0%" },
              { x: "100%", ease: "Sine.easeInOut" },
              2
            );
            gsap.set(
              ".icon-line",
              { autoAlpha: 0, width: "0%", ease: "Sine.easeInOut" },
              ".1"
            );
            gsap.to(
              ".icon-line",
              2,
              { autoAlpha: 1, width: "35%", ease: "Sine.easeInOut" },
              ".2"
            );
            tlslider.play();
          });
        },
      },
      ".4"
    );

    function slideIn(el) {
      return gsap.from(el, 0.7, { autoAlpha: 0, x: "+=50" });
    }

    function slideOut(el) {
      return gsap.to(el, 0.7, { autoAlpha: 0, x: "+=50" });
    }

    let tlslider = new Timeline({ repeat: -1 });
    tlslider.add(slideIn(".paph-wrapper0"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper0"));
    tlslider.add(slideIn(".paph-wrapper1"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper1"));
    tlslider.add(slideIn(".paph-wrapper2"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper2"));
    tlslider.add(slideIn(".paph-wrapper3"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper3"));
    tlslider.add(slideIn(".paph-wrapper4"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper4"));
    tlslider.add(slideIn(".paph-wrapper5"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper5"));
    tlslider.add(slideIn(".paph-wrapper6"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper6"));
    tlslider.add(slideIn(".paph-wrapper7"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper7"));
    tlslider.add(slideIn(".paph-wrapper8"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper8"));
    tlslider.add(slideIn(".paph-wrapper9"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper9"));
    tlslider.add(slideIn(".paph-wrapper10"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper10"));
    tlslider.add(slideIn(".paph-wrapper11"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper11"));
    tlslider.add(slideIn(".paph-wrapper12"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper12"));
    tlslider.add(slideIn(".paph-wrapper13"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper13"));
    tlslider.add(slideIn(".paph-wrapper14"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper14"));
    tlslider.add(slideIn(".paph-wrapper15"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper15"));
    tlslider.add(slideIn(".paph-wrapper16"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper16"));
    tlslider.add(slideIn(".paph-wrapper17"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper17"));
    tlslider.add(slideIn(".paph-wrapper18"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper18"));
    tlslider.add(slideIn(".paph-wrapper19"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper19"));
    tlslider.add(slideIn(".paph-wrapper20"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper20"));
    tlslider.add(slideIn(".paph-wrapper21"));

    tlslider.addPause();
    tlslider.add(slideOut(".paph-wrapper21"));
  }, []);

  return (
    <div className="posslider">
      <div id="content-wrapper">
        <div id="foreground"></div>
        <div
          id="tlslicarousellJLC"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="./img/ustawa-1.jpg"
                alt="First slide"
              />
            </div>
            {Array(22)
              .fill(1)
              .map((_slide, index) => (
                <div key={uniqid()} className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={`./img/ustawa-${index + 2}.jpg`}
                    alt={`slide ${index + 2}`}
                  />
                </div>
              ))}
          </div>
        </div>
        <div id="box-container">
          {messages.map((message, index) => (
            <div key={uniqid()} className={`paph-wrapper${index}`}>
              <div id="text">
                <h2 className="fadeText text-uppercase">{message.head}</h2>
                <i className="icon-line"></i>
                <p className="fadeText">{message.p}</p>
              </div>
              <div className="small-path"></div>
              <div className="path"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSslider;
